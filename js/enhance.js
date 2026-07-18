/* ══════════════════════════════════════════════════════════════
   EGYGULF — UI ENHANCEMENT LAYER (JS)
   Drop-in: حطّه آخر واحد بعد باقي الـ scripts.
   بيحقن طبقات الأضواء + سبوت لايت بيتبع الماوس + reveal إضافي.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, id, html) {
    var n = document.createElement(tag);
    if (id) n.id = id;
    if (html) n.innerHTML = html;
    return n;
  }

  function injectLights() {
    if (document.getElementById('fx-lights')) return;
    var first = document.body.firstChild;

    function prepend(node) { document.body.insertBefore(node, first); }

    // 3) فينيت + سبوت (يتحطوا الأول عشان يبقوا ورا)
    prepend(el('div', 'fx-vignette'));
    prepend(el('div', 'fx-spot'));

    // 2) الأشعة النازلة من فوق
    prepend(el('div', 'fx-rays',
      '<div class="fx-ray r1"></div>' +
      '<div class="fx-ray r2"></div>' +
      '<div class="fx-ray r3"></div>'
    ));

    // 1) طبقة البقع الضوئية
    prepend(el('div', 'fx-lights',
      '<div class="fx-blob b1"></div>' +
      '<div class="fx-blob b2"></div>' +
      '<div class="fx-blob b3"></div>' +
      '<div class="fx-blob b4"></div>'
    ));
  }

  // سبوت لايت يتبع الماوس (throttled بالـ rAF)
  function wireSpotlight() {
    if (reduce) return;
    var spot = document.getElementById('fx-spot');
    if (!spot) return;
    var mx = 50, my = 40, queued = false;

    function apply() {
      queued = false;
      spot.style.setProperty('--mx', mx + '%');
      spot.style.setProperty('--my', my + '%');
    }
    window.addEventListener('mousemove', function (e) {
      mx = (e.clientX / window.innerWidth) * 100;
      my = (e.clientY / window.innerHeight) * 100;
      if (!queued) { queued = true; requestAnimationFrame(apply); }
    }, { passive: true });
  }

  // parallax خفيف للبقع مع السكرول
  function wireParallax() {
    if (reduce) return;
    var lights = document.getElementById('fx-lights');
    if (!lights) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || 0;
        lights.style.transform = 'translateY(' + (y * 0.06) + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }

  // reveal إضافي ناعم لأي عنصر عليه .fx-up
  function wireReveal() {
    var targets = document.querySelectorAll('.fx-up');
    if (!targets.length || !('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('fx-in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('fx-in');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t) { obs.observe(t); });
  }

  function init() {
    injectLights();
    wireSpotlight();
    wireParallax();
    wireReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
