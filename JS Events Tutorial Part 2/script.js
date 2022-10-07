// Selectors
let body = document.querySelector('body');
let listElem = document.querySelectorAll('main ul li');
let entries = document.querySelectorAll('main ul li span');
let inputs = document.querySelectorAll('main ul li input');

// Functions
let edit = function () {
  let span = this.querySelector('span');
  let input = this.querySelector('input');
  span.classList.add('hidden');
  input.classList.remove('hidden');
  input.focus();
  input.setSelectionRange(0, input.value.length);
};

let updateItem = function (e) {
  this.previousElementSibling.innerText = this.value;
  this.previousElementSibling.innerText = this.value;
  this.classList.add('hidden');
  this.previousElementSibling.classList.remove('hidden');
};

updateItemByKeypress = function (e) {
  if (e.key === 'Enter') {
    entries.forEach((span) => {
      span.innerText = span.nextElementSibling.value;
      span.nextElementSibling.classList.add('hidden');
    });
  }
  // alt.- setez this + doc. event target
};

// Events
listElem.forEach((elem) => {
  elem.addEventListener('click', edit);
});

inputs.forEach((input) => {
  input.addEventListener('blur', updateItem);
  console.log(input);
});

document.addEventListener('keypress', updateItemByKeypress);
