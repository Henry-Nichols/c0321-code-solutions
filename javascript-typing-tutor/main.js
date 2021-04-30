var restart = document.querySelector('button');
var typer = document.getElementById('phrase');
var arr = typer.textContent.split('');
var spanArr = [];
<<<<<<< HEAD
var phraseArr = [];
var position = 0;

window.addEventListener('load', loader);
function loader() {

  var phraseText = typer.textContent;
  phraseArr.push(phraseText);
}

for (var i = 0; i < arr.length; i++) {
=======
var position =  0;

for(var i = 0; i < arr.length; i++){
>>>>>>> b26ef0d8811d244e8244309aac27d9c92ff6f00d
  var spanCharacter = document.createElement('span');
  spanCharacter.textContent = arr[i];
  spanArr.push(spanCharacter);
}

<<<<<<< HEAD
window.addEventListener('keyup', function (e) {
=======
window.addEventListener('keyup', function(e) {
>>>>>>> b26ef0d8811d244e8244309aac27d9c92ff6f00d
  if (arr[position].toLowerCase() === e.key) {

    spanArr[position].classList.remove('incorrect');
    spanArr[position].classList.add('correct');

    spanArr[position].classList.remove('underline');
<<<<<<< HEAD
    spanArr[position + 1].classList.add('underline');

    typer.innerHTML = '';

    position++;

    for (var i = 0; i < arr.length; i++) {
      typer.appendChild(spanArr[i]);
    }

  } else {
    spanArr[position].classList.add('incorrect');
=======
    spanArr[position+1].classList.add('underline');

    typer.innerHTML = '';

    for(var i = 0; i < arr.length; i++){
      typer.appendChild(spanArr[i]);
    }

    position++

  }else{
    spanArr[position].classList.add('incorrect');

>>>>>>> b26ef0d8811d244e8244309aac27d9c92ff6f00d
  }

});

<<<<<<< HEAD
restart.addEventListener('click', function (e) {
  var iterator = spanArr.values();
  for (var el of iterator) {
    el.classList.remove('correct');
    el.classList.remove('incorrect');
    el.classList.remove('underline');
  }
});
=======
restart.addEventListener('click', function(e) {
  window.location.reload();
})
>>>>>>> b26ef0d8811d244e8244309aac27d9c92ff6f00d
