/* Food timeline renderer — vertical navy/gold timeline. Never throws. */
(function () {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  window.renderTimeline = function (el, name) {
    try {
      if (!el) return;
      var data = (window.FOOD_TIMELINES || {})[name];
      if (!data || !data.length) {
        el.innerHTML =
          '<div class="tl-empty"><span class="tl-empty-rule"></span>' +
          '<p>Timeline coming soon for this dish — our editors are still researching its story.</p></div>';
        return;
      }
      var html = '<ol class="food-timeline">';
      data.forEach(function (m) {
        html +=
          '<li class="tl-item">' +
            '<span class="tl-dot" aria-hidden="true"></span>' +
            '<div class="tl-body">' +
              '<span class="tl-era">' + esc(m.era) + '</span>' +
              '<h4 class="tl-title">' + esc(m.title) + '</h4>' +
              '<p class="tl-text">' + esc(m.text) + '</p>' +
            '</div>' +
          '</li>';
      });
      html += '</ol>';
      el.innerHTML = html;
    } catch (e) {
      try { el.innerHTML = '<div class="tl-empty"><p>Timeline unavailable right now.</p></div>'; } catch (_) {}
    }
  };
})();
