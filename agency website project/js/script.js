let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
toggle.addEventListener('click', function () {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
  console.log(this);
});
