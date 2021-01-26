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
