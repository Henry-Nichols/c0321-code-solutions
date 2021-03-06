var restart = document.querySelector('button');
var typer = document.getElementById('phrase');
var arr = typer.textContent.split('');
var spanArr = [];
var phraseArr = [];
var position = 0;

window.addEventListener('load', loader);
function loader() {

  var phraseText = typer.textContent;
  phraseArr.push(phraseText);
}

for (var i = 0; i < arr.length; i++) {
  var spanCharacter = document.createElement('span');
  spanCharacter.textContent = arr[i];
  spanArr.push(spanCharacter);
}

window.addEventListener('keyup', function (e) {
  if (arr[position].toLowerCase() === e.key) {

    spanArr[position].classList.remove('incorrect');
    spanArr[position].classList.add('correct');

    spanArr[position].classList.remove('underline');
    spanArr[position + 1].classList.add('underline');

    typer.innerHTML = '';

    position++;

    for (var i = 0; i < arr.length; i++) {
      typer.appendChild(spanArr[i]);
    }

  } else {
    spanArr[position].classList.add('incorrect');
  }

});

restart.addEventListener('click', function (e) {
  var iterator = spanArr.values();
  for (var el of iterator) {
    el.classList.remove('correct');
    el.classList.remove('incorrect');
    el.classList.remove('underline');
  }
});
