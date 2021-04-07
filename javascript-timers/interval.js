var counter = 4

var earthCountdown = setInterval(function() {
  counter--
  document.querySelector('h1').innerHTML = counter;

  if (counter === 0) {
    document.querySelector('h1').innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(earthCountdown);
  }

},  1000);
