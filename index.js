let shoppingCart = {};
const products = document.getElementsByClassName("add-to-the-card");
/* const addButtons = document.getElementsByClassName("quantity-button")
*/
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
    console.log(shoppingCart); 

}else {
    shoppingCart[product.id] = {...product}
    console.log(shoppingCart);
}
};

document.querySelectorAll(".quantity-button").forEach((qbutton) => {
    qbutton.addEventListener("click", () => {
        /* if (e.target.classList.contains("quantity-button")) {
           const product = shoppingCart[e.target.dataset.textContent]
           product.productQuantity = shoppingCart[e.target.dataset.textContent].productQuantity+1 
        } */
        const type = qbutton.getAttribute("data-type");
        /* const currentQuantity = parseInt(input.value); */
        const product = shoppingCart[product.id];
        if(type === "substract" && productQuantity> 0){
            product.productQuantity = productQuantity-1
        } else if (type === "add"){
            product.productQuantity = productQuantity+1
        }
    } )
}) 
