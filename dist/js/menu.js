"use strict";

const menuToggleButton = document.querySelector(".header__btn--menu");
const navMenu = document.querySelector(".menu");

const search = document.querySelector(".search");
const searchButton = document.querySelector(".header__btn--search");
const searchButtonClose = document.querySelector(".search__btn--close");
const body = document.querySelector(".page");
const searchField = document.querySelector(".search__field");

const menuElementNews = document.querySelector(".news");
const navSubmenu = document.querySelector(".submenu");
const navMenuElements = document.querySelectorAll(".menu__item");

//          MAIN MENU TOGGLER

menuToggleButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  navMenu.classList.toggle("menu--show");
  navMenu.classList.toggle("menu--fade");
  if (navMenu.style.overflow === "visible" && !navSubmenu.classList.contains("submenu--show")) {
    navMenu.style.overflow = "hidden";
  } else if (navMenu.style.overflow === "visible" && navSubmenu.classList.contains("submenu--show")) {
    navMenu.style.overflow = "hidden";
  }
});

//          SUBMENU TOGGLER

for (let i = 0; i < navMenuElements.length; i++) {
  navMenuElements[i].addEventListener("click", function (evt) {
    let target = evt.target;
    let currentTarget = evt.currentTarget;
    if (currentTarget.classList.contains("news")) {
      navSubmenu.classList.toggle("submenu--show");
      navMenu.style = "overflow: visible;";
      menuElementNews.classList.toggle("news--show");
    } 
    for (let i = 0; i < navMenuElements.length; i++) {
      if (navMenuElements[i].classList.contains("menu__item--current")) {
        navMenuElements[i].classList.remove("menu__item--current");
      }
    }
      currentTarget.classList.add("menu__item--current");
  });
};

//          SEARCH BAR OPEN\CLOSE

searchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  search.classList.add("search--active");
  body.classList.add("blocked");
  searchField.focus();
});
searchButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  search.classList.remove("search--active");
  body.classList.remove("blocked");
});
