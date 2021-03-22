var buttonOne = document.querySelector('.click-button');
buttonOne.addEventListener('click', function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
});

var buttonTwo = document.querySelector('.hover-button');
buttonTwo.addEventListener('mouseover', function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
});

var buttonThree = document.querySelector('.double-click-button');
buttonThree.addEventListener('dblclick', function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
});
