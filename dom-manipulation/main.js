var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
var btn = document.querySelector('#btn');
var clickCounter = 0;

hotButton.addEventListener('click', function () {
  clickCounter++;
  clickCount.textContent = 'Clicks:' + ' ' + clickCounter;
  if (clickCounter < 4) {

    if (!btn.classList.contains('cold')) {
      btn.classList.add('cold');
    }

  } else if (clickCounter < 7) {
    btn.classList.remove('cold');

    if (!btn.classList.contains('cool')) {
      btn.classList.add('cool');
    }

  } else if (clickCounter < 10) {
    btn.classList.remove('cool');

    if (!btn.classList.contains('tepid')) {
      btn.classList.add('tepid');
    }

  } else if (clickCounter < 13) {
    btn.classList.remove('tepid');

    if (!btn.classList.contains('warm')) {
      btn.classList.add('warm');
    }
  } else if (clickCounter < 16) {
    btn.classList.remove('warm');

    if (!btn.classList.contains('hot')) {
      btn.classList.add('hot');
    }

  } else if (clickCounter >= 16) {
    btn.classList.remove('hot');

    if (!btn.classList.contains('nuclear')) {
      btn.classList.add('nuclear');
    }
  }
});
