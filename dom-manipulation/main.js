var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
var btn = document.querySelector('#btn');
var clickCounter = 0;

hotButton.addEventListener('click', function (event) {
  clickCounter++;
  clickCount.textContent = 'Clicks:' + ' ' + clickCounter;
  if (clickCounter < 4) {
    btn.classList.add('cold');

  } else if (clickCounter < 7) {
    btn.classList.remove('cold');
    btn.classList.add('cool');

  } else if (clickCounter < 10) {
    btn.classList.remove('cool');
    btn.classList.add('tepid');

  } else if (clickCounter < 13) {
    btn.classList.remove('tepid');
    btn.classList.add('warm');

  } else if (clickCounter < 16) {
    btn.classList.remove('warm');
    btn.classList.add('hot');

  } else if (clickCounter >= 16) {
    btn.classList.remove('hot');
    btn.classList.add('nuclear');
  }

});
