'use strict';

var userTools = document.querySelector('.header__user-tools');
var navBtn = document.querySelector('.header__user-tools button');
var navBtnImg = document.querySelector('.header__nav-btn-img');
var logoImg = document.querySelector('.header__logo-image');
var search = document.querySelector('.header__search');
var searchInput = document.querySelector('.header__search input');
var searchInputIcon = document.querySelector('.header__search-icon');
var navLinks = document.querySelectorAll('.header__container a');
var navigation = document.querySelector('.header__navigation');
var addNav = document.querySelectorAll('.header__add-nav a');
var addNavLogin = document.querySelector('.header__add-nav-login a');
var cartImg = document.querySelector('.header__tools-cart-image');
var faqItem = document.querySelectorAll('.faq__list li');
var faqText = document.querySelectorAll('.faq__list p');
var filterTrigger = document.querySelectorAll('.catalog__filter-form h3');
var filterSection = document.querySelectorAll('.catalog__filter-section');
var filterInputs = document.querySelectorAll('.catalog__filter-inputs');
navBtn.classList.add('header__nav-btn--close-nav');
userTools.classList.add('header__user-tools--close-nav');
search.classList.add('header__search--close-nav');
navigation.classList.add('header__navigation--close-nav');
navBtn.addEventListener('click', function () {
  navBtnImg.classList.toggle('header__nav-btn-img--nav-opened');
  userTools.classList.toggle('header__user-tools--nav-opened');
  logoImg.classList.toggle('header__logo-image--nav-opened');
  searchInput.style.border = 'none';
  searchInput.style.color = '#ffffff';
  searchInputIcon.classList.toggle('header__search-icon--nav-opened');

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = '#ffffff';
  }

  for (var j = 0; j < addNav.length; j++) {
    addNav[j].style.color = 'rgba(255, 255, 255, 0.75)';
  }

  addNavLogin.style.color = '#ffffff';
  search.classList.toggle('header__search--nav-opened');
  navigation.classList.toggle('header__navigation--nav-opened');
  cartImg.classList.toggle('header__tools-cart-image--nav-opened');
});

for (var i = 0; i < faqItem.length; i++) {
  faqText[i].classList.add('faq-hidden');
  faqItem[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    evt.currentTarget.classList.toggle('faq-visible-li');
    evt.currentTarget.querySelector('p').classList.toggle('faq-visible');
  });
  faqItem[i].addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      evt.currentTarget.classList.toggle('faq-visible-li');
      evt.currentTarget.querySelector('p').classList.toggle('faq-visible');
    }
  });
}

function onClick(event, secEl, inpEl) {
  event.preventDefault();
  secEl.classList.toggle('catalog__filter-section--opened');
  inpEl.classList.toggle('filter-visible');
}

var _loop = function _loop() {
  var secEl = filterSection[j];
  var inpEl = filterInputs[j];
  filterInputs[j].classList.add('filter-hidden');
  filterTrigger[j].addEventListener('click', function (e) {
    onClick(e, secEl, inpEl);
  });
};

for (var j = 0; j < filterTrigger.length; j++) {
  _loop();
} // eslint-disable-next-line no-undef


var mainSlider = $('.new-in__slider');
mainSlider.addClass('owl-carousel').owlCarousel({
  items: 4,
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  slideBy: 4,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: false,
  navElement: 'button',
  slideTransition: '',
  loadedClass: 'new-in__slider--loaded',
  info: true,
  dots: true,
  navContainerClass: 'new-in__pagination',
  navClass: ['new-in__pagination-previous', 'new-in__pagination-next'],
  dotsClass: 'new-in__slider-page-nav',
  dotClass: true,
  responsive: {
    0: {
      items: 2,
      margin: 30,
      mouseDrag: true
    },
    1024: {
      items: 4
    }
  }
});
mainSlider.owlCarousel();