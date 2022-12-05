let shoppingCart = {};
const products = document.getElementsByClassName("add-to-the-card");

Array.from(products).forEach(product => product.addEventListener("click", event => {
    addToTheCart(event)
}))

const addToTheCart = event => {
    if (event.target.classList.contains("add-to-the-card")){
        setCart(event.target.parentElement.parentElement)
    } 
}; 

const setCart = object => {
    const product = { 
        id: object.id, 
        image: object.querySelector(".product-image").src,
        productName: object.querySelector(".flower-name").textContent,
        productPrice: parseFloat(object.querySelector(".price").textContent),
        productQuantity: parseInt(object.querySelector("#quantity").value)
    }
    
if(shoppingCart.hasOwnProperty(product.id)) {
    
    shoppingCart[product.id].productQuantity = product.productQuantity;
    /* console.log(shoppingCart); */

}else {
    shoppingCart[product.id] = {...product}
    /*console.log(shoppingCart);*/
}


};


