var contactForm = document.querySelector('#contact-form');
var submitForm = document.querySelector('submit');

contactForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  var formObject = {
    email: contactForm.elements.email.value,
    name: contactForm.elements.name.value,
    message: contactForm.elements.message.value
  };

  console.log(formObject);

  contactForm.reset();
}
