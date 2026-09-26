/* Firebase client configuration — The Global Food Encyclopedia.
 *
 * Sign-in + cloud sync are powered by Firebase (Authentication + Firestore).
 * This file holds ONLY public client-side keys. Firebase API keys are safe
 * to publish in client code — access is enforced by Firebase Security Rules,
 * not by hiding the key.
 *
 * =================  SITE OWNER SETUP (do once)  =================
 *  1. Go to https://console.firebase.google.com and create a project
 *     (e.g. "global-food-encyclopedia").
 *  2. In the project, open Build > Authentication > Sign-in method and
 *     enable the providers you want: Google, Phone, Email/Password.
 *  3. Open Build > Firestore Database > Create database, then paste the
 *     security rules from FIRESTORE_RULES.md (in this folder) into the
 *     Rules tab and Publish.
 *  4. Open Project settings (gear icon) > General > "Your apps" > Add app >
 *     Web (</>). The console shows a firebaseConfig object.
 *  5. Replace EVERY "PASTE_..." value below with your real values.
 *  6. In Authentication > Settings > Authorized domains, add
 *     isukiro.github.io (the GitHub Pages domain).
 * ================================================================
 *
 * Until the values below are replaced, auth.js stays completely inert:
 * the site works exactly as before, with no sign-in UI and no network
 * calls to Google/Firebase.
 */
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};
