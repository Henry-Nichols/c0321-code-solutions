var tempTwo = document.querySelector('.open-button');
var tempThree = document.querySelector('.modal-bg');
var modalBtn = document.querySelector('.close-button');

tempTwo.addEventListener('click', function (e) {
  tempThree.classList.remove('modal-hidden');
  tempThree.classList.add('modal-appear');
});

modalBtn.addEventListener('click', function (e) {
  tempThree.classList.remove('modal-appear');
  tempThree.classList.add('modal-hidden');
});
