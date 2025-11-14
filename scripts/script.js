document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var current = localStorage.getItem('site-theme') || 'light';
  applyTheme(current);

  btn.addEventListener('click', function () {
    var next = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(next);
  });

  function applyTheme(name) {
    if (name === 'dark') {
      document.body.classList.add('dark');
      btn.textContent = '☀️';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      document.body.classList.remove('dark');
      btn.textContent = '🌙';
      btn.setAttribute('aria-pressed', 'false');
    }
    try { localStorage.setItem('site-theme', name); } catch (e) {}
  }

  var galleryImgs = document.querySelectorAll('.gallery img');
  galleryImgs.forEach(function(img, idx) {
    img.style.animationDelay = (idx * 0.1) + 's';
  });

  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card, idx) {
    card.style.animationDelay = (idx * 0.15) + 's';
  });
});

