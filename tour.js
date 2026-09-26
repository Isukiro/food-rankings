/* Guided tour for the Global Food Encyclopedia.
   Fully self-contained: injects its own styles, overlay, nav replay link,
   and exposes window.startFoodTour(). No dependencies. */
(function () {
  'use strict';

  var STORE_KEY = 'fr_tour_seen';
  var NOPLAY_KEY = 'fr_tour_noautoplay';
  var OVERLAY_ID = 'food-tour-overlay';
  var REPLAY_ID = 'tourReplay';

  /* ~60-second homepage tour, written for a first-time, non-technical visitor.
   * Every selector below was verified against index.html — keep it that way. */
  var STEPS = [
    {
      title: 'Start with the menus',
      body: 'Everything on the site lives in three menus up top: Explore for rankings and maps, Community for your shelf, Help for Sage and this tour.',
      selector: '.nav-group'
    },
    {
      title: 'Search all 1,203 foods',
      body: 'Type any dish, craving, or country here — matching foods appear as you type.',
      selector: '#searchInput'
    },
    {
      title: 'Food of the Day',
      body: 'One new dish every day. Tap this card to open the full showcase with its photo and story.',
      selector: '#fotdCard'
    },
    {
      title: 'Filter in one tap',
      body: 'Tap the Category or Region chips to narrow the list — try Dessert, or Asia.',
      selector: '#searchCatChips'
    },
    {
      title: 'The official Rankings',
      body: 'The Top 100 Best and Top 100 Worst foods on Earth, each scored out of 10 with an S-to-F tier.',
      link: { href: 'rankings.html', label: 'Open the Rankings' }
    },
    {
      title: 'Vote and compare',
      body: 'On the Rankings page, tap the stars to rate any dish, or tick Compare on up to three dishes to see them side by side.',
      link: { href: 'rankings.html', label: 'Try it now' }
    },
    {
      title: 'Meet Sage',
      body: 'Stuck or curious? Tap the chef button in the corner any time and ask Sage about any food.',
      selector: '#sage-fab'
    }
  ];

  var currentStep = 0;
  var tourOpen = false;
  var positionTimer = null;
  var scrollWaiter = null;

  /* Keep only targets that are actually rendered (some ids, e.g. #fotdCard,
     appear multiple times when a template + live copy coexist). */
  function visibleTargets(list) {
    var out = [];
    for (var i = 0; i < list.length; i++) {
      try {
        var r = list[i].getBoundingClientRect();
        if (r.width > 0 && r.height > 0) out.push(list[i]);
      } catch (e) { /* skip */ }
    }
    return out;
  }

  function clearScrollWaiter() {
    if (scrollWaiter) { clearInterval(scrollWaiter); scrollWaiter = null; }
  }

  /* Wait until the smooth auto-scroll actually settles before measuring
     element positions. The old fixed 380ms timeout measured mid-scroll and
     could park the card thousands of pixels off-screen, killing the tour. */
  function waitScrollSettled(cb) {
    clearScrollWaiter();
    var lastY = (typeof window.scrollY === 'number') ? window.scrollY : 0;
    var stable = 0, tries = 0;
    scrollWaiter = setInterval(function () {
      tries++;
      var y = (typeof window.scrollY === 'number') ? window.scrollY : 0;
      if (y === lastY) { stable++; } else { stable = 0; lastY = y; }
      if (stable >= 2 || tries >= 22) {
        clearScrollWaiter();
        cb();
      }
    }, 120);
  }

  function storageGet(k) {
    try { return window.localStorage.getItem(k); } catch (e) { return null; }
  }
  function storageSet(k, v) {
    try { window.localStorage.setItem(k, v); } catch (e) { /* private mode: ignore */ }
  }

  function injectStyles() {
    if (document.getElementById('food-tour-styles')) return;
    var css =
      '.ft-overlay{position:fixed;inset:0;z-index:200;background:rgba(3,7,17,0.72);' +
        '-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);}' +
      '.ft-ring{position:fixed;z-index:201;pointer-events:none;border:2px solid var(--gold,#c9a227);' +
        'border-radius:12px;box-shadow:0 0 0 4000px rgba(3,7,17,0.0),0 0 24px rgba(201,162,39,0.55),' +
        'inset 0 0 18px rgba(201,162,39,0.18);transition:all .25s ease;}' +
      '.ft-card{position:fixed;z-index:202;max-width:420px;width:calc(100vw - 48px);' +
        'background:var(--navy,#0a1a33);border:1px solid var(--gold,#c9a227);border-radius:14px;' +
        'padding:30px 30px 26px;box-shadow:0 24px 70px rgba(0,0,0,0.6),0 0 40px rgba(201,162,39,0.12);' +
        'color:var(--cream,#f2ecdc);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;}' +
      '.ft-card.ft-centered{left:50% !important;top:50% !important;transform:translate(-50%,-50%);}' +
      '.ft-card::before{content:"";display:block;width:64px;height:2px;margin:0 auto 16px;' +
        'background:linear-gradient(90deg,transparent,var(--gold,#c9a227),transparent);}' +
      '.ft-step-count{font-size:.72rem;letter-spacing:3px;text-transform:uppercase;' +
        'color:var(--gold-bright,#d4af37);margin:0 0 8px;font-weight:600;}' +
      '.ft-card h2{font-family:Georgia,"Times New Roman",serif;font-size:1.65rem;font-weight:600;' +
        'letter-spacing:.4px;color:var(--cream,#f2ecdc);margin:0 0 10px;line-height:1.3;}' +
      '.ft-body{color:#c3ccdd;font-size:1.06rem;line-height:1.65;margin:0 0 6px;}' +
      '.ft-link-wrap{margin:14px 0 2px;}' +
      '.ft-link{display:inline-block;font-family:Georgia,serif;font-weight:700;font-size:.95rem;' +
        'letter-spacing:.4px;color:var(--gold-bright,#d4af37);text-decoration:none;' +
        'border:1px solid var(--gold,#c9a227);border-radius:999px;padding:10px 24px;transition:all .18s;}' +
      '.ft-link:hover{background:var(--gold,#c9a227);color:#101c34;}' +
      '.ft-dots{display:flex;gap:8px;justify-content:center;margin:20px 0 4px;}' +
      '.ft-dot{width:10px;height:10px;border-radius:50%;border:1px solid var(--gold,#c9a227);' +
        'background:transparent;cursor:pointer;padding:0;transition:all .18s;}' +
      '.ft-dot.ft-active{background:var(--gold,#c9a227);box-shadow:0 0 8px rgba(201,162,39,.7);}' +
      '.ft-actions{display:flex;justify-content:space-between;align-items:center;margin-top:14px;}' +
      '.ft-back{background:none;border:1px solid rgba(201,162,39,.5);color:var(--cream,#f2ecdc);' +
        'border-radius:999px;padding:10px 22px;font-family:inherit;font-size:.9rem;cursor:pointer;transition:all .18s;}' +
      '.ft-back:hover{border-color:var(--gold,#c9a227);}' +
      '.ft-back[disabled]{opacity:.35;cursor:default;}' +
      '.ft-next{border:none;cursor:pointer;border-radius:999px;' +
        'background:linear-gradient(180deg,var(--gold-bright,#d4af37),var(--gold,#c9a227));' +
        'color:#101c34;font-family:Georgia,serif;font-weight:700;font-size:.95rem;letter-spacing:.4px;' +
        'padding:11px 30px;transition:all .18s;}' +
      '.ft-next:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(201,162,39,.35);}' +
      '.ft-skip-top{position:absolute;top:10px;right:12px;cursor:pointer;font-family:inherit;' +
        'background:rgba(201,162,39,.12);border:1px solid var(--gold,#c9a227);' +
        'color:var(--cream,#f2ecdc);font-size:.88rem;letter-spacing:.4px;' +
        'padding:9px 18px;border-radius:999px;}' +
      '.ft-skip-top:hover{background:var(--gold,#c9a227);color:#101c34;}' +
      '.ft-noauto{display:flex;align-items:center;gap:8px;justify-content:center;' +
        'margin-top:18px;font-size:.82rem;color:var(--muted,#93a1bd);cursor:pointer;}' +
      '.ft-noauto input{accent-color:#c9a227;width:16px;height:16px;cursor:pointer;}';
    var style = document.createElement('style');
    style.id = 'food-tour-styles';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function buildOverlay() {
    injectStyles();
    var old = document.getElementById(OVERLAY_ID);
    if (old) old.remove();
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.className = 'ft-overlay';

    var card = document.createElement('div');
    card.className = 'ft-card ft-centered';
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'true');
    card.setAttribute('aria-labelledby', 'ft-title');

    var skip = document.createElement('button');
    skip.type = 'button';
    skip.className = 'ft-skip-top';
    skip.textContent = '✕ Skip tour';
    skip.addEventListener('click', finishTour);

    var count = document.createElement('p');
    count.className = 'ft-step-count';

    var title = document.createElement('h2');
    title.id = 'ft-title';

    var body = document.createElement('p');
    body.className = 'ft-body';

    var linkWrap = document.createElement('div');
    linkWrap.className = 'ft-link-wrap';

    var dots = document.createElement('div');
    dots.className = 'ft-dots';
    for (var d = 0; d < STEPS.length; d++) {
      (function (idx) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'ft-dot';
        dot.setAttribute('aria-label', 'Go to step ' + (idx + 1));
        dot.addEventListener('click', function () { showStep(idx); });
        dots.appendChild(dot);
      })(d);
    }

    var actions = document.createElement('div');
    actions.className = 'ft-actions';

    var back = document.createElement('button');
    back.type = 'button';
    back.className = 'ft-back';
    back.textContent = 'Back';
    back.addEventListener('click', function () { showStep(currentStep - 1); });

    var next = document.createElement('button');
    next.type = 'button';
    next.className = 'ft-next';
    next.textContent = 'Next';
    next.addEventListener('click', function () {
      if (currentStep >= STEPS.length - 1) finishTour();
      else showStep(currentStep + 1);
    });

    actions.appendChild(back);
    actions.appendChild(next);

    var noauto = document.createElement('label');
    noauto.className = 'ft-noauto';
    var noautoBox = document.createElement('input');
    noautoBox.type = 'checkbox';
    noautoBox.checked = !!storageGet(NOPLAY_KEY);
    noautoBox.setAttribute('aria-label', "Don't auto-play this tour");
    noautoBox.addEventListener('change', function () {
      if (noautoBox.checked) storageSet(NOPLAY_KEY, '1');
      else { try { window.localStorage.removeItem(NOPLAY_KEY); } catch (e) { /* noop */ } }
    });
    var noautoText = document.createElement('span');
    noautoText.textContent = "Don't auto-play this tour";
    noauto.appendChild(noautoBox);
    noauto.appendChild(noautoText);

    card.appendChild(skip);
    card.appendChild(count);
    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(linkWrap);
    card.appendChild(dots);
    card.appendChild(actions);
    card.appendChild(noauto);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    return overlay;
  }

  function clearRings() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    var rings = overlay.querySelectorAll('.ft-ring');
    for (var i = 0; i < rings.length; i++) rings[i].remove();
  }

  function drawRings(targets) {
    var overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < targets.length; i++) {
      var r = targets[i].getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      var ring = document.createElement('div');
      ring.className = 'ft-ring';
      ring.style.left = (r.left - 8) + 'px';
      ring.style.top = (r.top - 8) + 'px';
      ring.style.width = (r.width + 16) + 'px';
      ring.style.height = (r.height + 16) + 'px';
      frag.appendChild(ring);
    }
    overlay.insertBefore(frag, overlay.firstChild);
  }

  function positionCard(targets) {
    var overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    var card = overlay.querySelector('.ft-card');
    if (!card) return;
    card.classList.remove('ft-centered');
    card.style.transform = '';
    card.style.visibility = 'hidden';
    card.style.left = '0px';
    card.style.top = '0px';

    var cardW = card.offsetWidth;
    var cardH = card.offsetHeight;
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    if (targets && targets.length && vw > 720) {
      var first = targets[0].getBoundingClientRect();
      var left = Math.max(16, Math.min(first.left, vw - cardW - 16));
      var below = first.bottom + 24;
      var above = first.top - cardH - 24;
      var top;
      if (below + cardH <= vh) top = below;
      else if (above >= 16) top = above;
      else top = Math.max(16, (vh - cardH) / 2);
      card.style.left = left + 'px';
      card.style.top = top + 'px';
      /* Safety net: if the card would still land off-screen (e.g. the page
         kept moving after measuring), center it instead of stranding the
         tour with unreachable buttons. */
      if (top < -cardH || top > vh || left > vw) {
        card.classList.add('ft-centered');
        card.style.left = '';
        card.style.top = '';
      }
    } else {
      card.classList.add('ft-centered');
    }
    card.style.visibility = 'visible';
  }

  function showStep(idx) {
    if (idx < 0) idx = 0;
    if (idx >= STEPS.length) idx = STEPS.length - 1;
    currentStep = idx;

    var overlay = document.getElementById(OVERLAY_ID) || buildOverlay();
    var card = overlay.querySelector('.ft-card');
    var step = STEPS[idx];

    clearRings();

    overlay.querySelector('.ft-step-count').textContent = 'Step ' + (idx + 1) + ' of ' + STEPS.length;
    overlay.querySelector('#ft-title').textContent = step.title;
    overlay.querySelector('.ft-body').textContent = step.body;

    var linkWrap = overlay.querySelector('.ft-link-wrap');
    linkWrap.innerHTML = '';
    if (step.link) {
      var a = document.createElement('a');
      a.className = 'ft-link';
      a.href = step.link.href;
      a.textContent = step.link.label;
      linkWrap.appendChild(a);
    }

    var dots = overlay.querySelectorAll('.ft-dot');
    for (var d = 0; d < dots.length; d++) {
      dots[d].classList.toggle('ft-active', d === idx);
    }

    var back = overlay.querySelector('.ft-back');
    back.disabled = (idx === 0);
    overlay.querySelector('.ft-next').textContent = (idx === STEPS.length - 1) ? 'Finish' : 'Next';

    var targets = [];
    if (step.selector) {
      try {
        var found = document.querySelectorAll(step.selector);
        for (var t = 0; t < found.length; t++) targets.push(found[t]);
      } catch (e) { targets = []; }
    }
    targets = visibleTargets(targets);

    if (positionTimer) { clearTimeout(positionTimer); positionTimer = null; }
    clearScrollWaiter();

    if (targets.length) {
      try { targets[0].scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { /* noop */ }
      waitScrollSettled(function () {
        drawRings(targets);
        positionCard(targets);
      });
    } else {
      drawRings([]);
      positionCard(null);
    }

    tourOpen = true;
  }

  function finishTour() {
    storageSet(STORE_KEY, '1');
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) overlay.remove();
    if (positionTimer) { clearTimeout(positionTimer); positionTimer = null; }
    clearScrollWaiter();
    tourOpen = false;
  }

  function startFoodTour() {
    showStep(0);
  }

  /* The tour's steps describe the homepage, so the overlay only ever runs
   * there. On other pages the nav link just takes you home and starts it. */
  function isHomePage() {
    var p = String(location.pathname || '').replace(/\\/g, '/');
    return /(^|\/)index\.html$/i.test(p) || /\/$/.test(p);
  }

  function injectReplayLink() {
    /* Retired: the nav now has a grouped "Help" menu containing its own
     * "Take the Tour" item (#tour-nav-link, bound in init()), so injecting
     * a second link would duplicate it. Kept as a no-op for safety. */
    return;
  }
  /* Binds the "Take the Tour" item in the nav's Help dropdown menu.
   * The tour's steps describe the homepage, so on other pages the item
   * takes you home and starts it there (same behavior the old injected
   * nav link had). */
  function bindMenuTourLink() {
    var link = document.getElementById('tour-nav-link');
    if (!link || link.__frTourBound) return;
    link.__frTourBound = true;
    if (isHomePage()) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        startFoodTour();
      });
    } else {
      link.setAttribute('href', 'index.html#tour');
    }
  }

  function init() {
    injectStyles();
    injectReplayLink();
    bindMenuTourLink();
    var viaLink = false;
    try {
      if (location.hash === '#tour') {
        viaLink = true;
        history.replaceState(null, '', location.pathname + location.search);
      }
    } catch (e) { /* file:// may reject replaceState; harmless */ }
    /* Autoplay once: only on the very first homepage visit (or an explicit
       #tour link). After the tour is finished or skipped, it never autoplays
       again — manual start via Help → Take the Tour always works. */
    if (isHomePage() && (viaLink || (!storageGet(STORE_KEY) && !storageGet(NOPLAY_KEY)))) {
      setTimeout(function () { startFoodTour(); }, 600);
    }
  }

  window.startFoodTour = startFoodTour;

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && tourOpen) finishTour();
  });

  window.addEventListener('resize', function () {
    if (!tourOpen) return;
    var step = STEPS[currentStep];
    var targets = [];
    if (step.selector) {
      try {
        var found = document.querySelectorAll(step.selector);
        for (var t = 0; t < found.length; t++) targets.push(found[t]);
      } catch (e) { targets = []; }
    }
    clearRings();
    drawRings(targets);
    positionCard(targets.length ? targets : null);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
