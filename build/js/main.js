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
var filterTrigger = document.querySelector('.catalog__content-filter-trigger');
var filterCloseBtn = document.querySelector('button.catalog__filter-close-btn');
var filterContainer = document.querySelector('.catalog__filter');
var filterElementTrigger = document.querySelectorAll('.catalog__filter-form h3');
var filterSection = document.querySelectorAll('.catalog__filter-section');
var filterInputs = document.querySelectorAll('.catalog__filter-inputs');
navBtn.classList.add('header__nav-btn--close-nav');
userTools.classList.add('header__user-tools--close-nav');
search.classList.add('header__search--close-nav');
navigation.classList.add('header__navigation--close-nav');
filterContainer.classList.remove('catalog__filter--visible');
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

filterTrigger.addEventListener('click', function () {
  filterContainer.classList.toggle('catalog__filter--visible');
});
filterTrigger.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    filterContainer.classList.toggle('catalog__filter--visible');
  }
});
filterCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  filterContainer.classList.remove('catalog__filter--visible');
});
filterCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    filterContainer.classList.remove('catalog__filter--visible');
  }
});

function onClick(event, secEl, inpEl) {
  event.preventDefault();
  secEl.classList.toggle('catalog__filter-section--opened');
  inpEl.classList.toggle('filter-visible');
}

var _loop = function _loop() {
  var secEl = filterSection[j];
  var inpEl = filterInputs[j];
  filterInputs[j].classList.add('filter-hidden');
  filterElementTrigger[j].addEventListener('click', function (e) {
    onClick(e, secEl, inpEl);
  });
};

for (var j = 0; j < filterElementTrigger.length; j++) {
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
mainSlider.owlCarousel(); // eslint-disable-next-line no-undef

$(function () {
  // eslint-disable-next-line no-undef
  var sliderRange = $('#slider-range');
  sliderRange.slider({
    range: true,
    min: 0,
    max: 198,
    values: [55, 155],
    slide: function slide(event, ui) {
      // eslint-disable-next-line no-undef
      $('#amount').val('$' + ui.values[0] + ' '.repeat(21) + '$' + ui.values[1]);
    }
  }); // eslint-disable-next-line no-undef

  $('#amount').val('$' + $('#slider-range').slider('values', 0) + ' '.repeat(21) + '$' // eslint-disable-next-line no-undef
  + $('#slider-range').slider('values', 1));
});