var buttonOne = document.querySelector('.click-button');

function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

buttonOne.addEventListener('click', handleClick);

var buttonTwo = document.querySelector('.hover-button');

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

buttonTwo.addEventListener('mouseover', handleMouseOver);

var buttonThree = document.querySelector('.double-click-button');

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

buttonThree.addEventListener('dblclick', handleDoubleClick);
