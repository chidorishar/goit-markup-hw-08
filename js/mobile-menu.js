const domEls = {
  menuToggle: document.getElementById('toggle-menu'),
  header: document.getElementById('header'),
};

domEls.menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.body.classList.toggle('is-header-fullscreen');
}
