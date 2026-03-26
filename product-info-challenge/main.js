const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const productAmount = document.getElementById("product-amount");
const productSum = document.getElementById("product-sum");
const buynowbtn = document.getElementById("buy-now-cta");
const successPage = document.getElementById("success-page");
const totalAmount = document.getElementById("total-amount");
const totalSum = document.getElementById("total-sum");
const returnBtn = document.getElementById("return-btn");
const productImg = document.getElementById("product-img");
const productContainer = document.getElementById("product-container");

successPage.classList.add("hidden");
let currentProductAmount = 1;
let currentProductSum = 399;
productAmount.textContent = currentProductAmount;
productSum.textContent = `$${currentProductSum}`;

function incrementProduct() {
  currentProductAmount++;
  productAmount.textContent = currentProductAmount;
  productSum.textContent = `$${currentProductAmount * currentProductSum}`;
}

function decrementProduct() {
  currentProductAmount--;
  productAmount.textContent = currentProductAmount;
  productSum.textContent = `$${(currentProductSum * currentProductAmount)}`;
}



returnBtn.addEventListener("click", removeSuccessPage);
buynowbtn.addEventListener("click", removeProductPage);
incrementBtn.addEventListener("click", incrementProduct);
decrementBtn.addEventListener("click", () => {
  if (currentProductAmount > 1) {
    decrementProduct();
  }
});

function removeProductPage() {
  productImg.classList.add("hidden");
  productContainer.classList.add("hidden");
  successPage.classList.remove("hidden");
  totalAmount.textContent = `Total amount: ${currentProductAmount}`;
  totalSum.textContent = `Total sum: ${currentProductSum}`;
}

function removeSuccessPage() {
  productImg.classList.remove("hidden");
  productContainer.classList.remove("hidden");
  successPage.classList.add("hidden");
  totalAmount.textContent = `Total amount: ${currentProductAmount}`;
  totalSum.textContent = `Total sum: ${currentProductSum}`;
}