/* FoodAuth — optional sign-in + cloud sync for The Global Food Encyclopedia.
 *
 * Powered by Firebase Authentication + Firestore, loaded from Google's CDN
 * (compat SDKs, no build step). This file is a progressive enhancement:
 *
 *  - If firebase-config.js still holds placeholder values (or is missing),
 *    FoodAuth stays completely inert: no errors, no network calls, and the
 *    site works exactly as before with localStorage-only shelves.
 *  - When configured, it initializes Firebase on page load, keeps the
 *    `.account-chip` nav element in sync with auth state, and syncs the
 *    user's Shelf (favorites / want-to-try / tried / ratings / explored)
 *    with the per-user Firestore doc `users/{uid}/shelf/main`.
 *
 * Sync strategy:
 *  - On sign-in: pull the cloud doc, merge with local (union of lists;
 *    ratings conflicts resolved by recency), write the merged set to BOTH
 *    local and cloud.
 *  - Afterwards: local Shelf changes push to Firestore, debounced by 2s.
 *
 * Depends on: firebase-config.js (before this file), collections.js
 * (window.Shelf — for sync; auth state works without it).
 */
(function () {
  "use strict";

  var SDK_VERSION = "10.12.2";
  var SDK_BASE = "https://www.gstatic.com/firebasejs/" + SDK_VERSION + "/";
  var SDK_FILES = [
    "firebase-app-compat.js",
    "firebase-auth-compat.js",
    "firebase-firestore-compat.js"
  ];
  var LOCAL_SYNC_KEY = "fr_cloud_synced_at";   /* last successful cloud round-trip */
  var LOCAL_WRITE_KEY = "fr_local_updated_at"; /* last local shelf mutation */

  /* ---------- config ---------- */

  function isConfigured() {
    var c = window.FIREBASE_CONFIG;
    if (!c || typeof c !== "object") return false;
    return ["apiKey", "authDomain", "projectId", "appId"].every(function (k) {
      return typeof c[k] === "string" && c[k] && c[k].indexOf("PASTE_") !== 0;
    });
  }

  /* ---------- lazy Firebase init (only when configured) ---------- */

  var firebaseApp = null;
  var auth = null;
  var db = null;
  var readyPromise = null;
  var sdkFailed = false;

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("Failed to load " + src)); };
      document.head.appendChild(s);
    });
  }

  function ensureReady() {
    if (!isConfigured()) return Promise.reject(new Error("Sign-in is not set up yet."));
    if (sdkFailed) return Promise.reject(new Error("Could not reach the sign-in service. Check your connection and try again."));
    if (readyPromise) return readyPromise;
    readyPromise = SDK_FILES
      .reduce(function (p, f) { return p.then(function () { return loadScript(SDK_BASE + f); }); }, Promise.resolve())
      .then(function () {
        if (!window.firebase) throw new Error("Firebase SDK failed to initialize.");
        if (!firebaseApp) {
          firebaseApp = window.firebase.initializeApp(window.FIREBASE_CONFIG);
          auth = window.firebase.auth();
          db = window.firebase.firestore();
          wireAuthState();
          wireShelfHook();
        }
        return true;
      })
      .catch(function (err) {
        sdkFailed = true;
        readyPromise = null;
        throw err;
      });
    return readyPromise;
  }

  /* ---------- account chip in the nav ---------- */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function initialOf(user) {
    var src = (user.displayName || user.email || user.phoneNumber || "?").trim();
    return src.charAt(0).toUpperCase() || "?";
  }

  function updateChips(user) {
    document.querySelectorAll(".account-chip").forEach(function (chip) {
      /* reset any previous signed-in wiring */
      chip.onclick = null;
      if (!user) {
        chip.setAttribute("href", "settings.html");
        chip.classList.remove("is-signed-in");
        chip.innerHTML = "Sign in";
        chip.setAttribute("aria-label", "Sign in to sync your shelf");
      } else {
        chip.setAttribute("href", "#");
        chip.classList.add("is-signed-in");
        chip.innerHTML =
          '<span class="account-initial" aria-hidden="true">' + esc(initialOf(user)) + "</span>" +
          '<span class="account-signout">Sign out</span>';
        chip.setAttribute("aria-label", "Signed in as " + (user.displayName || user.email || user.phoneNumber || "you") + " — sign out");
        chip.onclick = function (e) {
          e.preventDefault();
          FoodAuth.signOut();
        };
      }
    });
  }

  /* ---------- Firestore shelf sync ---------- */

  function docRef(uid) {
    return db.collection("users").doc(uid).collection("shelf").doc("main");
  }

  function shelfAvailable() {
    return typeof window.Shelf !== "undefined" && window.Shelf;
  }

  function snapshotFromShelf() {
    var S = window.Shelf;
    return {
      fav: S.list("fav"),
      try: S.list("try"),
      tried: S.list("tried"),
      viewed: S.exportData().explored,
      myratings: S.myRatings()
    };
  }

  function union(a, b) {
    var seen = {};
    var out = [];
    (a || []).concat(b || []).forEach(function (x) {
      if (typeof x === "string" && !seen[x]) { seen[x] = true; out.push(x); }
    });
    return out;
  }

  /* Merge local + cloud. Lists merge by union; rating conflicts go to
   * whichever side wrote most recently. */
  function mergeSnapshots(local, cloud, cloudWins) {
    var merged = {
      fav: union(local.fav, cloud.fav),
      try: union(local.try, cloud.try),
      tried: union(local.tried, cloud.tried),
      viewed: union(local.viewed, cloud.viewed),
      myratings: {}
    };
    var names = {};
    Object.keys(local.myratings || {}).forEach(function (k) { names[k] = true; });
    Object.keys(cloud.myratings || {}).forEach(function (k) { names[k] = true; });
    Object.keys(names).forEach(function (k) {
      var l = local.myratings ? local.myratings[k] : undefined;
      var c = cloud.myratings ? cloud.myratings[k] : undefined;
      if (l === undefined) merged.myratings[k] = c;
      else if (c === undefined) merged.myratings[k] = l;
      else merged.myratings[k] = cloudWins ? c : l;
    });
    return merged;
  }

  function stampLocalWrite() {
    try { localStorage.setItem(LOCAL_WRITE_KEY, String(Date.now())); } catch (e) { /* noop */ }
  }
  function markSynced() {
    try { localStorage.setItem(LOCAL_SYNC_KEY, String(Date.now())); } catch (e) { /* noop */ }
  }
  function lastLocalWrite() {
    return Number(localStorage.getItem(LOCAL_WRITE_KEY) || 0) || 0;
  }

  function pushSnapshot(user, snap) {
    var payload = {
      fav: snap.fav || [],
      try: snap.try || [],
      tried: snap.tried || [],
      viewed: snap.viewed || [],
      myratings: snap.myratings || {},
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };
    return docRef(user.uid).set(payload, { merge: true }).then(function () { markSynced(); });
  }

  /* On sign-in: pull cloud, merge with local, write the merged set to both. */
  function pullAndMerge(user) {
    if (!shelfAvailable()) return Promise.resolve();
    return docRef(user.uid).get().then(function (snap) {
      var local = snapshotFromShelf();
      if (!snap.exists) {
        /* First sign-in on this account: upload what this device has. */
        return pushSnapshot(user, local);
      }
      var cloud = snap.data() || {};
      var cloudTime = (cloud.updatedAt && typeof cloud.updatedAt.toMillis === "function")
        ? cloud.updatedAt.toMillis() : 0;
      var merged = mergeSnapshots(local, {
        fav: cloud.fav, try: cloud.try, tried: cloud.tried,
        viewed: cloud.viewed, myratings: cloud.myratings
      }, cloudTime > lastLocalWrite());
      window.Shelf.importData(merged);
      markSynced();
      return pushSnapshot(user, merged);
    }).catch(function (err) {
      /* Sync is best-effort: the local shelf always keeps working. */
      if (window.console && console.warn) console.warn("Shelf cloud sync failed:", err);
    });
  }

  var pushTimer = null;
  function schedulePush(user) {
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      pushTimer = null;
      if (!shelfAvailable()) return;
      pushSnapshot(user, snapshotFromShelf()).catch(function (err) {
        if (window.console && console.warn) console.warn("Shelf cloud sync failed:", err);
      });
    }, 2000);
  }

  var shelfHookWired = false;
  function wireShelfHook() {
    if (shelfHookWired || !shelfAvailable()) return;
    shelfHookWired = true;
    window.Shelf.onChange(function () {
      stampLocalWrite();
      var u = auth && auth.currentUser;
      if (u) schedulePush(u);
    });
  }

  function wireAuthState() {
    auth.onAuthStateChanged(function (user) {
      updateChips(user);
      if (user) {
        wireShelfHook();
        pullAndMerge(user);
      } else if (pushTimer) {
        clearTimeout(pushTimer);
        pushTimer = null;
      }
    });
    /* Paint the chip immediately for the persisted session, if any. */
    updateChips(auth.currentUser || null);
  }

  /* ---------- public API ---------- */

  var phoneConfirmation = null;

  var FoodAuth = {
    isConfigured: isConfigured,

    /* Resolves true once Firebase is initialized; rejects when unconfigured. */
    ready: function () { return ensureReady(); },

    currentUser: function () {
      return (auth && auth.currentUser) || null;
    },

    onAuthStateChanged: function (cb) {
      if (typeof cb !== "function") return function () {};
      if (!isConfigured()) { cb(null); return function () {}; }
      return ensureReady().then(function () {
        return auth.onAuthStateChanged(cb);
      }).catch(function () {
        cb(null);
        return function () {};
      });
    },

    signInWithGoogle: function () {
      return ensureReady().then(function () {
        var provider = new window.firebase.auth.GoogleAuthProvider();
        return auth.signInWithPopup(provider);
      });
    },

    /* Starts phone sign-in: sends an SMS code. recaptchaContainerId is the
     * id of an (empty) element in the page; the reCAPTCHA is invisible. */
    signInWithPhone: function (phoneNumber, recaptchaContainerId) {
      return ensureReady().then(function () {
        if (!phoneNumber || !recaptchaContainerId) {
          throw new Error("Phone number and reCAPTCHA container are required.");
        }
        if (window.__frRecaptcha) {
          try { window.__frRecaptcha.clear(); } catch (e) { /* noop */ }
          window.__frRecaptcha = null;
        }
        var verifier = new window.firebase.auth.RecaptchaVerifier(
          recaptchaContainerId, { size: "invisible" }, auth
        );
        window.__frRecaptcha = verifier;
        return auth.signInWithPhoneNumber(phoneNumber, verifier).then(function (cr) {
          phoneConfirmation = cr;
          return true;
        });
      });
    },

    /* Completes phone sign-in with the SMS code the user received. */
    confirmPhoneCode: function (code) {
      if (!phoneConfirmation) {
        return Promise.reject(new Error("No verification in progress. Send the code first."));
      }
      return phoneConfirmation.confirm(String(code || "").trim()).then(function (res) {
        phoneConfirmation = null;
        return res;
      });
    },

    /* Signs in with email/password, creating the account if it is new. */
    signUpOrInWithEmail: function (email, password) {
      return ensureReady().then(function () {
        email = String(email || "").trim();
        if (!email || !password) throw new Error("Email and password are required.");
        return auth.signInWithEmailAndPassword(email, password).catch(function (err) {
          if (err && err.code === "auth/user-not-found") {
            return auth.createUserWithEmailAndPassword(email, password);
          }
          throw err;
        });
      });
    },

    signOut: function () {
      if (!isConfigured() || !auth) return Promise.resolve();
      return auth.signOut();
    },

    /* Deletes the cloud shelf doc. Local data on this device is untouched. */
    eraseCloudData: function () {
      return ensureReady().then(function () {
        var u = auth.currentUser;
        if (!u) throw new Error("You are not signed in.");
        return docRef(u.uid).delete();
      });
    },

    /* Push the current local shelf to the cloud right now (signed in only). */
    syncNow: function () {
      return ensureReady().then(function () {
        var u = auth.currentUser;
        if (!u) throw new Error("You are not signed in.");
        if (!shelfAvailable()) throw new Error("Shelf is not available on this page.");
        return pushSnapshot(u, snapshotFromShelf());
      });
    },

    lastSyncedAt: function () {
      var t = Number(localStorage.getItem(LOCAL_SYNC_KEY) || 0) || 0;
      return t ? new Date(t) : null;
    },

    /* Turn a Firebase auth error into a short human-readable message. */
    friendlyError: function (err) {
      var code = (err && err.code) || "";
      var map = {
        "auth/invalid-email": "That email address doesn't look right.",
        "auth/user-not-found": "No account found for that email.",
        "auth/wrong-password": "Wrong password — try again.",
        "auth/invalid-credential": "Email or password didn't match.",
        "auth/email-already-in-use": "That email is already registered — try signing in instead.",
        "auth/weak-password": "Password needs to be at least 6 characters.",
        "auth/too-many-requests": "Too many attempts — wait a moment and try again.",
        "auth/popup-closed-by-user": "The sign-in window was closed before finishing.",
        "auth/popup-blocked": "Your browser blocked the sign-in popup — allow popups and try again.",
        "auth/invalid-phone-number": "That phone number doesn't look right. Include the country code, e.g. +1.",
        "auth/invalid-verification-code": "That code doesn't match — check the SMS and try again.",
        "auth/code-expired": "That code expired — send a fresh one.",
        "auth/quota-exceeded": "SMS quota exceeded — try again later.",
        "auth/captcha-check-failed": "The security check failed — reload the page and try again."
      };
      if (map[code]) return map[code];
      if (err && err.message) return err.message;
      return "Something went wrong — please try again.";
    }
  };

  window.FoodAuth = FoodAuth;

  /* Boot: initialize on page load when (and only when) configured, so the
   * persisted session restores and the nav chip reflects auth state. */
  if (isConfigured()) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { ensureReady().catch(function () {}); });
    } else {
      ensureReady().catch(function () {});
    }
  }
})();
