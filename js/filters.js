const domEls = {
  filtersWrapper: document.querySelector('#filters-wrapper'),
  cards: document.querySelectorAll('.section-portfolio__card'),
  activeFilter: document.querySelector('.section-portfolio__button-filter--active'),
};

domEls.filtersWrapper.addEventListener('click', onCardSetFiltering);

function onCardSetFiltering(event) {
  const clickedEl = event.target;
  const filterBy = clickedEl.dataset.filterType;

  if (clickedEl.nodeName != 'BUTTON' || clickedEl === domEls.activeFilter) {
    return;
  }
  if (filterBy === 'all') {
    domEls.cards.forEach(card => card.classList.remove('hidden'));
    return;
  }
  // unhide previously hidden cards
  domEls.cards.forEach(card =>
    card.dataset.cardType === filterBy
      ? card.classList.remove('hidden')
      : card.classList.add('hidden')
  );
  //set proper style to active filter button
  domEls.activeFilter.classList.remove('section-portfolio__button-filter--active');
  clickedEl.classList.add('section-portfolio__button-filter--active');
  domEls.activeFilter = clickedEl;
}
