// Expands one barber at a time to show their cuts.
(function () {
  var barbers = document.querySelectorAll('.barber');

  function closeAll() {
    barbers.forEach(function (b) {
      b.classList.remove('is-open');
      b.querySelector('.barber-card').setAttribute('aria-expanded', 'false');
    });
  }

  barbers.forEach(function (barber) {
    var card = barber.querySelector('.barber-card');
    var close = barber.querySelector('.close-btn');

    card.addEventListener('click', function () {
      closeAll();
      barber.classList.add('is-open');
      card.setAttribute('aria-expanded', 'true');
      barber.scrollIntoView({ behavior: 'smooth', block: 'start' });
      close.focus({ preventScroll: true });
    });

    close.addEventListener('click', function () {
      closeAll();
      card.focus({ preventScroll: true });
      barber.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.barber.is-open');
      if (open) open.querySelector('.close-btn').click();
    }
  });
})();
