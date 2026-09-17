// Ashalon Productions — intro sequencing + light interactions

(function () {
  var body = document.body;
  var intro = body.querySelector('.intro');
  if (!intro) return;

  body.classList.add('intro-active');
  var done = false;

  function finish() {
    if (done) return;
    done = true;
    body.classList.remove('intro-active');
    intro.remove();
  }

  // clapperboard: arm opens at 0.6s-1.45s, holds, then cuts out hard as the card eases in
  window.setTimeout(finish, 2300);

  // allow a click/tap or Escape/Enter to skip ahead
  intro.addEventListener('click', finish, { once: true });
  window.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      finish();
      window.removeEventListener('keydown', onKey);
    }
  });
})();
