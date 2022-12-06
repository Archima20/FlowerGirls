const shoppingCart = {
  product1: {
    id: "product1",
    image: "http://127.0.0.1:5500/src/images/Sarracenia.jpg",
    productName: "Sarracenia",
    productPrice: 18,
    productQuantity: 4,
  },
  product2: {
    id: "product2",
    image: "http://127.0.0.1:5500/src/images/Drosera.jpg",
    productName: "Drosera Capensis",
    productPrice: 15.99,
    productQuantity: 5,
  },
  product7: {
    id: "product7",
    image: "http://127.0.0.1:5500/src/images/centro_naranja.jpg",
    productName: "Centro Naranja",
    productPrice: 117.99,
    productQuantity: 10,
  },
};

document.addEventListener('DOMContentLoaded', ( => {
  fetchData()
  if (localStorage.getItem('shoppingcart')) {
    shoppingCart = JSON.parse(localStorage.getItem('shoppingcart'));
    printShoppingCart()
  }
}))

const templateshoppingcart = document.getElementById('templateShoppingCart').content;
const fragment = document.createDocumentFragment();

const printShoppingCart = () => {
    Object.values(shoppingCart).forEach(product =>{
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
}