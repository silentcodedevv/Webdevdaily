const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");
const exitBtn = document.getElementById("exit-btn");
const main = document.getElementById("main");

function hamburgerBtnF() {
  exitBtn.classList.remove("hidden");
  hamburgerBtn.classList.add("hidden");
  menu.classList.remove("hidden");
  main.classList.add("hidden");
}

function exitBtnF() {
  exitBtn.classList.add("hidden");
  hamburgerBtn.classList.remove("hidden");
  menu.classList.add("hidden");
  main.classList.remove("hidden");
}

const breakpoint = window.matchMedia("(max-width: 640px)");

function handleBreakPointChange(e) {
  if (!e.matches) {
    exitBtn.classList.add("hidden");
    hamburgerBtn.classList.remove("hidden");
    menu.classList.add("hidden");
    main.classList.remove("hidden");
  }
}

breakpoint.addEventListener("change", handleBreakPointChange);
hamburgerBtn.addEventListener("click", hamburgerBtnF);
exitBtn.addEventListener("click", exitBtnF);
handleBreakPointChange(breakpoint);