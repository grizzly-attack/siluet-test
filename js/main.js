'use strict';
(function () {
  const PADDING = 19;
  let header = document.querySelector('.header');
  let headerHeight = header.offsetHeight;
  let main = document.querySelector('.page-main');
  let nav = document.querySelector('.page-main__nav');

  document.body.onscroll = function() {
    if (window.pageYOffset > 0) {
      header.classList.add('fixed');
      main.style.paddingTop = headerHeight + PADDING + "px";
      nav.style.top = headerHeight + PADDING + "px";
    } else {
      header.classList.remove('fixed')
      main.style.paddingTop = PADDING + "px";
      nav.style.top = 0;
    }
  }
})();
