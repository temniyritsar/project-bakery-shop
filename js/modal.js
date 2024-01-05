const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

// const modalbtnOpen = document.querySelector('.modal-Btn-open');
// const modalbtnClose = document.querySelector('.modal-Btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

// modalbtnOpen.addEventListener('click', toggleModal);
// modalbtnClose.addEventListener('click', toggleModal);
