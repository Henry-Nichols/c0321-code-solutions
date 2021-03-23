var bodyBackGround = document.querySelector('body');
var light = document.getElementById('bulb');

var lightIsOn = true;
light.addEventListener('click', function (e) {
  lightIsOn = !lightIsOn;
  if (!lightIsOn) {
    light.classList.add('light-off');
    bodyBackGround.style.backgroundColor = 'rgb(17,17,17)';
  } else {
    light.classList.remove('light-off');
    light.classList.add('light-on');
    bodyBackGround.style.backgroundColor = 'rgb(254,249,241)';
  }
});
