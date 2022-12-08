
document.addEventListener('DOMContentLoaded', ( )=> {
  if (localStorage.getItem('shoppingcart')) {
    shoppingCart = JSON.parse(localStorage.getItem('shoppingcart'));
    printShoppingCart()
  }
})

const templateshoppingcart = document.getElementById('templateShoppingCart').content;
const fragment = document.createDocumentFragment();

const printShoppingCart = () => {
    Object.values(shoppingCart).forEach(product =>{
        templateshoppingcart.querySelector('#selectedProduct').setAttribute("data-item", product.id)
        templateshoppingcart.querySelector('#selectedProduct').value = product.value;
        templateshoppingcart.querySelector('img').src = product.image;
        templateshoppingcart.querySelector('p').textContent = product.productName;
        templateshoppingcart.querySelector('span').textContent = product.productPrice;
        templateshoppingcart.querySelector('.btn-substract').dataset.type = product.type;
        templateshoppingcart.querySelector('input').value = product.productQuantity;
        templateshoppingcart.querySelector('.btn-add').dataset.type = product.type;
        const clone = templateshoppingcart.cloneNode(true);
        fragment.appendChild(clone);
    })  
    items.appendChild(fragment);

const  totalQuantity = Object.values(shoppingCart).reduce((acc, {productQuantity}) => acc + productQuantity, 0)

const  totalPrice = Object.values(shoppingCart).reduce((acc, {productQuantity, productPrice}) => acc + productQuantity * productPrice, 0)

const total = document.querySelector(".total-price")
  
total.innerHTML = `${totalPrice}`
}

const emptyCartButton = document.querySelector(".empty-car");
emptyCartButton.addEventListener("click", () => {
  shoppingCart = {};

});
