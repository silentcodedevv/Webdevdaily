const hamburgerMenu = document.getElementById("hamburger-menu-btn");
const hamburgerBtn = document.getElementById("hamburger-btn");
const exitBtn = document.getElementById("exit-btn");
const ulMenu = document.getElementById("menu");
const logo = document.getElementById("logo");
const firstAside = document.getElementById("first-aside");
const secondAside = document.getElementById("second-aside");
const main = document.getElementById("main");

function hamburgerBtnF() {
  hamburgerBtn.classList.add("hidden");
  exitBtn.classList.remove("hidden");
  hamburgerMenu.classList.add("w-full");
  hamburgerMenu.classList.add("px-16");
  ulMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  firstAside.classList.add("hidden");
  secondAside.classList.add("hidden");
  main.classList.add("hidden");
}

function exitBtnF() {
  hamburgerBtn.classList.remove("hidden");
  exitBtn.classList.add("hidden");
  hamburgerMenu.classList.remove("w-full");
  hamburgerMenu.classList.remove("px-16");
  ulMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  firstAside.classList.toggle("hidden");
  secondAside.classList.toggle("hidden");
  main.classList.toggle("hidden");
}

hamburgerBtn.addEventListener("click", hamburgerBtnF);
exitBtn.addEventListener("click", exitBtnF);

const breakpoint = window.matchMedia("(max-width: 640px)");

function handleBreakpointChange(e) {
  if (!e.matches) {
    hamburgerBtn.classList.remove("hidden");
    exitBtn.classList.add("hidden");
    hamburgerMenu.classList.remove("w-full");
    hamburgerMenu.classList.remove("px-16");
    ulMenu.classList.add("hidden");
    logo.classList.toggle("hidden");
    firstAside.classList.add("hidden");
    secondAside.classList.add("hidden");
    main.classList.add("hidden");
  } else {
    hamburgerBtn.classList.remove("hidden");
    exitBtn.classList.add("hidden");
    hamburgerMenu.classList.remove("w-full");
    hamburgerMenu.classList.remove("px-16");
    ulMenu.classList.add("hidden");
    logo.classList.add("hidden");
    firstAside.classList.add("hidden");
    secondAside.classList.add("hidden");
    main.classList.remove("hidden");
  }
}

breakpoint.addEventListener("change", handleBreakpointChange);
handleBreakpointChange(breakpoint);