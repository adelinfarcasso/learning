let body = document.querySelector('body');
let listElem = document.querySelectorAll('main ul li');
let entries = document.querySelectorAll('main ul li span');
let inputs = document.querySelectorAll('main ul li input');

let edit = function () {
  let span = this.querySelector('span');
  let input = this.querySelector('input');
  span.classList.add('hidden');
  input.classList.remove('hidden');
  input.focus();
  input.setSelectionRange(0, input.value.length);
};

let updateItem = function () {
  this.previousElementSibling.innerText = this.value;
  this.previousElementSibling.innerHTML = this.value;
  this.classList.add('hidden');
  this.previousElementSibling.classList.remove('hidden');
};

listElem.forEach((elem) => {
  elem.addEventListener('click', edit);
});

inputs.forEach((input) => {
  input.addEventListener('blur', updateItem);
});
