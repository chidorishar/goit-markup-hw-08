const domEls = {
  filtersWrapper: document.querySelector('#filters-wrapper'),
  cards: document.querySelectorAll('.section-portfolio__card'),
  activeFilter: document.querySelector('.section-portfolio__button-filter--active'),
};
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));
const cardAnimationDuration = 250;

domEls.filtersWrapper.addEventListener('click', onCardSetFiltering);

async function hideCardWithAnimation(card) {
  card.classList.add('js-animate-card-appearance');
  setTimeout(() => card.classList.add('hidden'), cardAnimationDuration);
}

async function unhideCardWithAnimation(card) {
  card.classList.add('js-animate-card-appearance');
  setTimeout(() => card.classList.remove('hidden'), cardAnimationDuration);
  await sleep(50);
  setTimeout(() => card.classList.remove('js-animate-card-appearance'), cardAnimationDuration);
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
    domEls.cards.forEach(card => unhideCardWithAnimation(card));
    return;
  }
  //process cards
  domEls.cards.forEach(card => {
    card.dataset.cardType === filterBy
      ? unhideCardWithAnimation(card)
      : hideCardWithAnimation(card);
  });
}
