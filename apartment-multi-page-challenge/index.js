const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const hamburgerMenu = document.getElementById("nav-links");

function closeBtnFunction() {
  hamburgerMenu.style.display = "none";
}

function hamburgerBtnFunction() {
  hamburgerMenu.style.display = "flex";
}


closeBtn.addEventListener("click", closeBtnFunction);

hamburgerBtn.addEventListener("click", hamburgerBtnFunction);