// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input");

  const result = Number(price.innerText) * quantity.value;
 
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product");
  const allProductsArr = [...allProducts];

  const costArr = allProductsArr.map((elem) => {
    return updateSubtotal(elem);
  });

  // console.log(costArr);

  // ITERATION 3
  //... your code goes here
  const sumSelector = document.querySelector("#total-value span");
  const letTotalSum = costArr.reduce((acc, elem) => {
    return acc + elem;
  }, 0);

  sumSelector.innerHTML = letTotalSum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();

  console.log(event);
  console.log('The target in remove is:', target);
};

// ITERATION 5

function createProduct() {
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.querySelectorAll(".btn.btn-remove");
  const removeButtonsArr = [...allRemoveButtons];

  removeButtonsArr.forEach((elem) => {
    elem.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
