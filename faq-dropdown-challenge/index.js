const liBtn = document.querySelectorAll(".li-btn");

liBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    if (content) {
      content.classList.toggle("hidden")
    }

    const arrowBtn = btn.querySelector(".arrow");
    if (arrowBtn) {
      arrowBtn.classList.toggle("rotate-180")
    }
  })
})