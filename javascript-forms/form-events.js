function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  var temp = 'value of ' + event.target.name + ': ' + event.target.value;
  console.log(temp);
}

var inputName = document.querySelector('#user-name');
var inputEmail = document.querySelector('#user-email');
var textAreaMessage = document.querySelector('#user-message');

inputName.addEventListener('focus', handleFocus);
inputName.addEventListener('blur', handleBlur);
inputName.addEventListener('input', handleInput);

inputEmail.addEventListener('focus', handleFocus);
inputEmail.addEventListener('blur', handleBlur);
inputEmail.addEventListener('input', handleInput);

textAreaMessage.addEventListener('focus', handleFocus);
textAreaMessage.addEventListener('blur', handleBlur);
textAreaMessage.addEventListener('input', handleInput);
