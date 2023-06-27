const toTop = document.querySelector('.c-toTop');

toTop.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
};
