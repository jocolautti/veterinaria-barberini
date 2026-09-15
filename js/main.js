document.addEventListener('DOMContentLoaded', function() {
  /* ── Menú mobile ── */
  var h = document.querySelector('.site-header'),
      t = document.getElementById('navToggle'),
      n = document.getElementById('mobileNav');
  if (t && h) {
    t.addEventListener('click', function() {
      var o = h.classList.toggle('nav-open');
      t.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    n.querySelectorAll('a').forEach(function(l) {
      l.addEventListener('click', function() {
        h.classList.remove('nav-open');
        t.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Carrusel mobile ── */
  var isMobileLayout = window.innerWidth <= 1020;

  function makeCarousel(gridSel) {
    if (!isMobileLayout) return;

    var grid = document.querySelector(gridSel);
    if (!grid || grid._carousel) return;
    grid._carousel = true;

    /* Guardar items originales */
    var items = Array.from(grid.children);
    if (items.length < 2) return;

    /* Crear estructura: outer > track */
    var outer = document.createElement('div');
    outer.className = 'm-carousel-outer';

    var track = document.createElement('div');
    track.className = 'm-carousel-track';

    /* Mover items al track */
    items.forEach(function(el) { track.appendChild(el); });

    /* Dots */
    var dotsEl = document.createElement('div');
    dotsEl.className = 'm-carousel-dots';
    var dots = items.map(function(_, i) {
      var s = document.createElement('span');
      s.addEventListener('click', function() { goTo(i); });
      dotsEl.appendChild(s);
      return s;
    });

    /* Insertar en DOM */
    outer.appendChild(track);
    grid.appendChild(outer);
    grid.appendChild(dotsEl);

    /* Activar dot según scroll */
    function sync() {
      var iw = items[0].offsetWidth + 14;
      var idx = Math.min(items.length - 1, Math.round(track.scrollLeft / iw));
      dots.forEach(function(d, i) { d.classList.toggle('on', i === idx); });
    }
    function goTo(i) {
      var iw = items[0].offsetWidth + 14;
      track.scrollTo({ left: i * iw, behavior: 'smooth' });
    }

    track.addEventListener('scroll', sync, { passive: true });
    sync();

    /* Drag (mouse, para probar en desktop) */
    var dn = false, sx, ss;
    track.addEventListener('mousedown', function(e) {
      dn = true; sx = e.pageX; ss = track.scrollLeft;
      e.preventDefault();
    });
    document.addEventListener('mouseup', function() { dn = false; });
    document.addEventListener('mouseleave', function() { dn = false; });
    track.addEventListener('mousemove', function(e) {
      if (!dn) return;
      e.preventDefault();
      track.scrollLeft = ss - (e.pageX - sx);
    });
    track.querySelectorAll('img').forEach(function(img) {
      img.setAttribute('draggable', 'false');
    });
  }

  makeCarousel('.services-grid');
  makeCarousel('.gallery-grid');
  makeCarousel('.reviews-grid');
});
