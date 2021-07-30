'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsopenmodal.length; i++)
  btnsopenmodal[i].addEventListener('click', openModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnclosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
