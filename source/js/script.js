var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var buttons = document.querySelectorAll(".modal__button");
var popup = document.querySelector(".modal-form");


navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

buttons = [].slice.call(buttons);
buttons.forEach(function(button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-form--show");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-form--show")) {
      popup.classList.remove("modal-form--show");
    }
  }
});
