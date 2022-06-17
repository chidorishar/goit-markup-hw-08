const domEls = {
  modal: document.getElementById('modal'),
  modalCntrls: {
    openModalBtn: document.getElementById('section-hero__button'),
    closeModalBtn: document.getElementById('modal__close-button'),
  },
};

Object.values(domEls.modalCntrls).forEach(el => el.addEventListener('click', toggleModal));

function toggleModal() {
  document.body.classList.toggle('is-modal-shown');
}
