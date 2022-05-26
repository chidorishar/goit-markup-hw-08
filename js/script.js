const filters = document.querySelectorAll('.section-portfolio__button-filter');
var selectedCards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalControls = {
  openModalBtn: document.getElementById('section-hero__button'),
  closeModalBtn: document.getElementById('modal__close-button'),
};
const menuToggle = document.getElementById('toggle-menu');
const header = document.getElementById('header');

//add listeners
try {
  try {
    filters.forEach(f => f.addEventListener('click', onFiltersClick));
  } finally {
    try {
      Object.keys(modalControls).forEach(key =>
        modalControls[key].addEventListener('click', toggleModal)
      );
    } finally {
      try {
        menuToggle.addEventListener('click', toggleMenu);
      } finally {
      }
    }
  }
} catch (error) {
  console.error(error);
}

function onFiltersClick() {
  // unhide previously hidden cards
  selectedCards.forEach(card => card.classList.remove('hidden'));
  if (this.id != 'all-button-filter') {
    //select cards by type given by clicked filter
    selectedCards = document.querySelectorAll(
      '.section-portfolio__card:not(.js-util-' + this.id.replace('-button-filter', '-card') + ')'
    );
    //hide selected cards
    selectedCards.forEach(card => card.classList.add('hidden'));
  }
  //set proper style to active filter button
  document
    .querySelector('.section-portfolio__button-filter--active')
    .classList.remove('section-portfolio__button-filter--active');
  this.classList.add('section-portfolio__button-filter--active');
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

function toggleMenu() {
  header.classList.toggle('is-fullscreen');
}
