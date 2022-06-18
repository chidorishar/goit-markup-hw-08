const domEls = {
  backdrop: document.getElementById('modal'),
  modal: document.getElementById('modal'),
  modalCntrls: {
    openModalBtn: document.getElementById('section-hero__button'),
    closeModalBtn: document.getElementById('modal__close-button'),
  },
};
let isModalShown = false;

Object.values(domEls.modalCntrls).forEach(el => el.addEventListener('click', toggleModal));

function onBackdropClick(event) {
  event.target === domEls.backdrop ? toggleModal() : null;
}

function onEscPressed(event) {
  event.code === 'Escape' ? toggleModal() : null;
}

function toggleModal() {
  document.body.classList.toggle('is-modal-shown');
  if (isModalShown) {
    domEls.backdrop.removeEventListener('click', onBackdropClick);
    document.removeEventListener('keydown', onEscPressed);
  } else {
    domEls.backdrop.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscPressed);
  }
  isModalShown = !isModalShown;
}
