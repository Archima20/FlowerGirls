let shoppingCart = {};
const products = document.getElementsByClassName("add-to-the-card");

Array.from(products).forEach(product => product.addEventListener("click", event => {
    addToTheCart(event)
}))

const addToTheCart = event => {
    if (event.target.classList.contains("add-to-the-card")){
        setCart(event.target.parentElement.parentElement);
    } 
}; 

const setCart = (object) => {
  const product = {
    id: object.id,
    image: object.querySelector(".product-image").src,
    productName: object.querySelector(".flower-name").textContent,
    productPrice: parseFloat(object.querySelector(".price").textContent),
    productQuantity: parseInt(object.querySelector("#quantity").value),
  };

  if (shoppingCart.hasOwnProperty(product.id)) {
    shoppingCart[product.id].productQuantity = product.productQuantity;
    console.log(shoppingCart);
  } else {
    shoppingCart[product.id] = { ...product };
    console.log(shoppingCart);
  }
  sessionStorage.setItem('shoppingcart', JSON.stringify(shoppingCart));
};

document.querySelectorAll(".quantity-button").forEach((qbutton) => {
  qbutton.addEventListener("click", (e) => {
    const clickedButton = e.currentTarget;
    const input = clickedButton.parentElement.querySelector("input");
    const type = clickedButton.getAttribute("data-type");
    const currentQuantity = parseInt(input.value);
    if (type === "substract" && currentQuantity > 0) {
      input.value = currentQuantity - 1;
    } else if (type === "add") {
      input.value = currentQuantity + 1;
    }
  });
});

document.addEventListener('DOMContentLoaded', ( )=> {
    if (sessionStorage.getItem('shoppingcart')) {
      shoppingCart = JSON.parse(sessionStorage.getItem('shoppingcart'));
      printShoppingCart()
    }
  })
  
  const templateshoppingcart = document.getElementById("templateShoppingCart").content;
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
  
  const  totalQuantity = Object.values(shoppingCart).reduce((acc, {productQuantity}) => acc + productQuantity, 0)

  
  const  totalPrice = Object.values(shoppingCart).reduce((acc, {productQuantity, productPrice}) => acc + productQuantity * productPrice, 0)
  
  const total = document.querySelector(".total-price")
    
  total.innerHTML = `${totalPrice}`
  
  const emptyCartButton = document.querySelector(".empty-car");
  console.log(emptyCartButton);
  emptyCartButton.addEventListener("click", () => {
    shoppingCart = {};
    sessionStorage.clear();
    fetch();


  });
}
