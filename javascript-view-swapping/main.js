var tabContainer = document.querySelector('.tab-container');
var tab = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  var match = event.target.matches('.tab');
  if (!match) {
    return;
  }

  for (var i = 0; i < tab.length; i++) {
    if (tab[i] === event.target) {
      event.target.classList.add('active');
    } else if (tab[i] !== event.target) {
      tab[i].classList.remove('active');
    }
  }

  var dataViewClicked = event.target.getAttribute('data-view');

  for (var j = 0; j < views.length; j++) {

    var view = views[j];

    if (view.getAttribute('data-view') === dataViewClicked) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }

  }

});
