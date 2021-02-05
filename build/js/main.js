'use strict';

(function () {
  var TRANSPARENT_COLOR = 'rgba(255, 255, 255, 0.75)';
  var WHITE_COLOR = '#ffffff';
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
  var filterContainer = document.querySelector('.catalog__filter');
  var filterTrigger = document.querySelector('.catalog__content-filter-trigger');
  var filterCloseBtn = document.querySelector('button.catalog__filter-close-btn');
  var filterElementTrigger = document.querySelectorAll('.catalog__filter-form h3');
  var filterSection = document.querySelectorAll('.catalog__filter-section');
  var filterInputs = document.querySelectorAll('.catalog__filter-inputs');
  var addToCartBtn = document.querySelector('.product__description-add-to-card');
  var addCartModal = document.querySelector('.product-add-cart-modal');
  var addCartModalWindow = document.querySelector('.product-add-cart-modal__window');
  var addCartCloseBtn = document.querySelector('.product-add-cart-modal__window-close');
  var loginBtn = document.querySelector('.header__tools a');
  var loginModal = document.querySelector('.modal-login');
  var loginCloseBtn = document.querySelector('.modal-login__close');
  var htmlBody = document.querySelector('body');
  var loginBtnMobile = document.querySelector('.header__add-nav-login a');
  var loginSubmitBtn = document.querySelector('.modal-login-form button');
  var emailInput = document.querySelector('input[name="email"');
  var isStorageSupport = true;
  var storageEmail = '';
  var $ = window.jQuery;

  try {
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  navBtn.classList.add('header__nav-btn--close-nav');
  userTools.classList.add('header__user-tools--close-nav');
  search.classList.add('header__search--close-nav');
  navigation.classList.add('header__navigation--close-nav');

  var onLoadFilter = function onLoadFilter(element) {
    if (!element) {
      return;
    }

    element.classList.remove('catalog__filter--visible');
    element.classList.remove('catalog__filter--nojs');
    filterCloseBtn.classList.remove('catalog__filter-close-btn--nojs');
  };

  var filterTriggersOnLoad = function filterTriggersOnLoad(element, type, handler) {
    if (!element) {
      return;
    }

    element.addEventListener(type, handler); // eslint-disable-next-line consistent-return

    return function () {
      element.removeEventListener(type, handler);
    };
  };

  var addCartOnLoad = function addCartOnLoad(element) {
    if (!element) {
      return;
    }

    element.removeAttribute('href');
  };

  var loginOnLoad = function loginOnLoad(element) {
    if (!element) {
      return;
    }

    element.removeAttribute('href');
  };

  var setListener = function setListener(element, type, handler) {
    if (!element) {
      return;
    }

    element.addEventListener(type, handler); // eslint-disable-next-line consistent-return

    return function () {
      element.removeEventListener(type, handler);
    };
  };

  loginOnLoad(loginBtn);
  loginOnLoad(loginBtnMobile);
  addCartOnLoad(addToCartBtn);
  setListener(loginBtn, 'click', function () {
    loginModal.classList.add('modal-login--visible');

    if (storageEmail) {
      emailInput.value = storageEmail;
    } else {
      emailInput.focus();
    }
  });
  setListener(loginBtnMobile, 'click', function () {
    loginModal.classList.add('modal-login--visible');
    navBtnImg.classList.toggle('header__nav-btn-img--nav-opened');
    userTools.classList.toggle('header__user-tools--nav-opened');
    logoImg.classList.toggle('header__logo-image--nav-opened');
    searchInput.style.border = 'none';
    searchInput.style.color = WHITE_COLOR;
    searchInputIcon.classList.toggle('header__search-icon--nav-opened');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = WHITE_COLOR;
    }

    for (var j = 0; j < addNav.length; j++) {
      addNav[j].style.color = TRANSPARENT_COLOR;
    }

    addNavLogin.style.color = WHITE_COLOR;
    search.classList.toggle('header__search--nav-opened');
    navigation.classList.toggle('header__navigation--nav-opened');
    cartImg.classList.toggle('header__tools-cart-image--nav-opened');
    htmlBody.classList.add('nav-open');

    if (storageEmail) {
      emailInput.value = storageEmail;
    } else {
      emailInput.focus();
    }
  });
  setListener(loginBtn, 'keydown', function (evt) {
    if (evt.key === 'Enter') {
      loginModal.classList.add('modal-login--visible');

      if (storageEmail) {
        emailInput.value = storageEmail;
      } else {
        emailInput.focus();
      }
    }
  });
  setListener(loginSubmitBtn, 'click', function (evt) {
    evt.preventDefault();

    if (isStorageSupport) {
      localStorage.setItem('email', emailInput.value);
    }

    loginModal.classList.remove('modal-login--visible');
    htmlBody.classList.remove('nav-open');
  });
  setListener(document, 'click', function (evt) {
    if (evt.target === loginModal) {
      loginModal.classList.remove('modal-login--visible');
      htmlBody.classList.remove('nav-open');
    }
  });
  setListener(document, 'keydown', function (evt) {
    if (evt.key === 'Escape') {
      loginModal.classList.remove('modal-login--visible');
      htmlBody.classList.remove('nav-open');
    }
  });
  setListener(loginCloseBtn, 'click', function () {
    loginModal.classList.remove('modal-login--visible');
    htmlBody.classList.remove('nav-open');
  });
  setListener(addToCartBtn, 'click', function () {
    addCartModal.classList.add('product-add-cart-modal--visible');
    addCartModalWindow.focus();
  });
  setListener(addToCartBtn, 'keydown', function (evt) {
    if (evt.key === 'Enter') {
      addCartModal.classList.add('product-add-cart-modal--visible');
      addCartModalWindow.focus();
    }
  });
  setListener(addCartCloseBtn, 'click', function () {
    addCartModal.classList.remove('product-add-cart-modal--visible');
  });
  setListener(document, 'click', function (evt) {
    if (evt.target === addCartModal) {
      addCartModal.classList.remove('product-add-cart-modal--visible');
    }
  });
  setListener(document, 'keydown', function (evt) {
    if (addCartModal && evt.key === 'Escape') {
      addCartModal.classList.remove('product-add-cart-modal--visible');
    }
  });
  navBtn.addEventListener('click', function () {
    navBtnImg.classList.toggle('header__nav-btn-img--nav-opened');
    userTools.classList.toggle('header__user-tools--nav-opened');
    logoImg.classList.toggle('header__logo-image--nav-opened');
    searchInput.style.border = 'none';
    searchInput.style.color = WHITE_COLOR;
    searchInputIcon.classList.toggle('header__search-icon--nav-opened');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = WHITE_COLOR;
    }

    for (var j = 0; j < addNav.length; j++) {
      addNav[j].style.color = 'rgba(255, 255, 255, 0.75)';
    }

    addNavLogin.style.color = WHITE_COLOR;
    search.classList.toggle('header__search--nav-opened');
    navigation.classList.toggle('header__navigation--nav-opened');
    cartImg.classList.toggle('header__tools-cart-image--nav-opened');
    htmlBody.classList.toggle('nav-open');
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

  filterTriggersOnLoad(filterTrigger, 'click', function () {
    filterContainer.classList.toggle('catalog__filter--visible');
  });
  filterTriggersOnLoad(filterTrigger, 'keydown', function (evt) {
    if (evt.key === 'Enter') {
      filterContainer.classList.toggle('catalog__filter--visible');
    }
  });
  filterTriggersOnLoad(filterCloseBtn, 'click', function (evt) {
    evt.preventDefault();
    filterContainer.classList.remove('catalog__filter--visible');
  });
  filterTriggersOnLoad(filterCloseBtn, 'keydown', function (evt) {
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
  }

  onLoadFilter(filterContainer);

  function productCardGallery() {
    var photos = ['img/gold-necklace-for-women.png', 'img/pretty-gold-necklace.png', 'img/womens-necklace-set.png'];
    var thumbnails = document.querySelectorAll('.product__images-preview img');
    var fullPhoto = document.querySelector('.product__images-main img');

    var addThumbnailClickHandler = function addThumbnailClickHandler(thumbnail, photo) {
      thumbnail.addEventListener('click', function () {
        fullPhoto.src = photo;
      });
    };

    for (var g = 0; g < thumbnails.length; g++) {
      addThumbnailClickHandler(thumbnails[g], photos[g]);
    }
  }

  productCardGallery();
  var mainSlider = $('.new-in__slider');
  mainSlider.addClass('owl-carousel').owlCarousel({
    items: 4,
    loop: false,
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
    dots: false,
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
  $(function () {
    var sliderRange = $('#slider-range');
    sliderRange.slider({
      range: true,
      min: 0,
      max: 198,
      values: [55, 155],
      slide: function slide(event, ui) {
        $('#amount').val('$' + ui.values[0] + ' '.repeat(21) + '$' + ui.values[1]);
      }
    });
    $('#amount').val('$' + $('#slider-range').slider('values', 0) + ' '.repeat(21) + '$' + $('#slider-range').slider('values', 1));
  });
})();