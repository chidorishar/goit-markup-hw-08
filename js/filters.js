const domEls = {
  filtersWrapper: document.querySelector('#filters-wrapper'),
  cards: document.querySelectorAll('.section-portfolio__card'),
  activeFilter: document.querySelector('.section-portfolio__button-filter--active'),
};
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

domEls.filtersWrapper.addEventListener('click', onCardSetFiltering);

async function animateCardAppearance(card) {
  card.classList.add('js-animate-card-appearance');
  await sleep(150);
  card.classList.remove('js-animate-card-appearance');
}

function onCardSetFiltering(event) {
  const clickedEl = event.target;
  const filterBy = clickedEl.dataset.filterType;

  if (clickedEl.nodeName != 'BUTTON' || clickedEl === domEls.activeFilter) {
    return;
  }
  //set proper style to active filter button
  domEls.activeFilter.classList.remove('section-portfolio__button-filter--active');
  clickedEl.classList.add('section-portfolio__button-filter--active');
  domEls.activeFilter = clickedEl;
  if (filterBy === 'all') {
    domEls.cards.forEach(card => {
      animateCardAppearance(card);
      card.classList.remove('hidden');
    });
    return;
  }
  //process cards
  domEls.cards.forEach(card => {
    if (card.dataset.cardType === filterBy) {
      animateCardAppearance(card);
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
