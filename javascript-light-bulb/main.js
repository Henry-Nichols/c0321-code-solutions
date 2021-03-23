var bodyBackGround = document.querySelector('.body-on');
var light = document.querySelector('#bulb');

var lightIsOn = true;
light.addEventListener('click', function (e) {
  lightIsOn = !lightIsOn;
  if (!lightIsOn) {
    light.classList.add('light-off');
    bodyBackGround.classList.remove('body-on');
    bodyBackGround.classList.add('body-off');

  } else {
    light.classList.remove('light-off');
    light.classList.add('light-on');
    bodyBackGround.classList.remove('body-off');
    bodyBackGround.classList.add('body-on');
  }
});
