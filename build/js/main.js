/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
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
  var sliderContainer = document.querySelector('.swiper-container');
  var sliderElement = document.querySelectorAll('.swiper-slide');
  var sliderWrapper = document.querySelector('.swiper-wrapper');
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
  var body = document.querySelector('body');
  var mainContainer = document.querySelector('main');
  var footer = document.querySelector('footer');
  var loginForm = document.querySelector('.modal-login-form');
  var loginBtnMobile = document.querySelector('.header__add-nav-login a');
  var emailInput = document.querySelector('input#email');
  var isStorageSupport = true;
  var storageEmail = '';
  var $ = window.jQuery;

  function init() {
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

    var sliderOnLoad = function sliderOnLoad(element, cssclass) {
      if (!element) {
        return;
      }

      element.classList.remove(cssclass);
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

    var loginSubmit = function loginSubmit() {
      body.classList.remove('modal-open');
      loginModal.classList.remove('modal-login--visible');
    };

    loginOnLoad(loginBtn);
    loginOnLoad(loginBtnMobile);
    addCartOnLoad(addToCartBtn);
    sliderOnLoad(sliderContainer, 'swiper-container--nojs');
    sliderOnLoad(sliderWrapper, 'swiper-wrapper--nojs');

    for (var s = 0; s < sliderElement.length; s++) {
      sliderOnLoad(sliderElement[s], 'swiper-slide--nojs');
    }

    setListener(loginBtn, 'click', function () {
      loginModal.classList.add('modal-login--visible');
      body.classList.add('modal-open');

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
      mainContainer.classList.toggle('nav-open');
      footer.classList.toggle('nav-open');
      body.classList.add('modal-open');

      if (storageEmail) {
        emailInput.value = storageEmail;
      } else {
        emailInput.focus();
      }
    });
    setListener(loginBtn, 'keydown', function (evt) {
      if (evt.key === 'Enter') {
        loginModal.classList.add('modal-login--visible');
        body.classList.add('modal-open');

        if (storageEmail) {
          emailInput.value = storageEmail;
        } else {
          emailInput.focus();
        }
      }
    });
    setListener(loginForm, 'submit', function (evt) {
      evt.preventDefault();

      if (isStorageSupport) {
        localStorage.setItem('email', emailInput.value);
      }

      loginSubmit();
    });
    setListener(document, 'click', function (evt) {
      if (evt.target === loginModal) {
        body.classList.remove('modal-open');
        loginModal.classList.remove('modal-login--visible');
      }
    });
    setListener(document, 'keydown', function (evt) {
      if (evt.key === 'Escape') {
        loginSubmit();
      }
    });
    setListener(loginCloseBtn, 'click', function () {
      body.classList.remove('modal-open');
      loginModal.classList.remove('modal-login--visible');
    });
    setListener(addToCartBtn, 'click', function () {
      body.classList.add('modal-open');
      addCartModal.classList.add('product-add-cart-modal--visible');
      addCartModalWindow.focus();
    });
    setListener(addToCartBtn, 'keydown', function (evt) {
      if (evt.key === 'Enter') {
        body.classList.add('modal-open');
        addCartModal.classList.add('product-add-cart-modal--visible');
        addCartModalWindow.focus();
      }
    });
    setListener(addCartCloseBtn, 'click', function () {
      body.classList.remove('modal-open');
      addCartModal.classList.remove('product-add-cart-modal--visible');
    });
    setListener(document, 'click', function (evt) {
      if (evt.target === addCartModal) {
        body.classList.remove('modal-open');
        addCartModal.classList.remove('product-add-cart-modal--visible');
      }
    });
    setListener(document, 'keydown', function (evt) {
      if (addCartModal && evt.key === 'Escape') {
        body.classList.remove('modal-open');
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
      mainContainer.classList.toggle('nav-open');
      footer.classList.toggle('nav-open');
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
      filterElementTrigger[j].addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          onClick(e, secEl, inpEl);
        }
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
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: '.swiper-nav__btn--next',
        prevEl: '.swiper-nav__btn--prev'
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          allowTouchMove: false
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          allowTouchMove: true
        },
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          allowTouchMove: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function renderCustom(_swiper, current, total) {
              return current + ' of ' + total;
            }
          }
        }
      }
    });
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
  }

  window.onload = init;
})();