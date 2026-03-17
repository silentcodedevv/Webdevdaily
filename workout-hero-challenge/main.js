const hamburgerMenu = document.getElementById("hamburger-menu-btn");
const hamburgerBtn = document.getElementById("hamburger-btn");
const exitBtn = document.getElementById("exit-btn");
const ulMenu = document.getElementById("menu");
const logo = document.getElementById("logo");

function hamburgerBtnF() {
  hamburgerBtn.classList.toggle("hidden");
  exitBtn.classList.toggle("hidden");
  hamburgerMenu.classList.add("w-full");
  hamburgerMenu.classList.add("px-16");
  ulMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
}

function exitBtnF() {
  hamburgerBtn.classList.toggle("hidden");
  exitBtn.classList.toggle("hidden");
  hamburgerMenu.classList.remove("w-full");
  hamburgerMenu.classList.remove("px-16");
  ulMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
}

hamburgerBtn.addEventListener("click", hamburgerBtnF);
exitBtn.addEventListener("click", exitBtnF);