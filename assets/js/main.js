const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const aboutMeNav = document.querySelector('#about-me-nav');
const projectsNav = document.querySelector('#projects-nav');
const footerNav = document.querySelector('#footer-nav');

menuBtn.onclick = () => {
  navbar.classList.add('show');
  menuBtn.classList.add('hide');
  body.classList.add('disabled');
};
cancelBtn.onclick = () => {
  body.classList.remove('disabled');
  navbar.classList.remove('show');
  menuBtn.classList.remove('hide');
};
aboutMeNav.onclick = () => {
  body.classList.remove('disabled');
  navbar.classList.remove('show');
  menuBtn.classList.remove('hide');
};
projectsNav.onclick = () => {
  body.classList.remove('disabled');
  navbar.classList.remove('show');
  menuBtn.classList.remove('hide');
};
footerNav.onclick = () => {
  body.classList.remove('disabled');
  navbar.classList.remove('show');
  menuBtn.classList.remove('hide');
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};

(function ($) {
  var $window = $(window),
    $body = $('body');

  // Breakpoints.
  breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });
})(jQuery);
