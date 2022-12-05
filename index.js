let shoppingCard = {};
const products = document.getElementsByClassName("add-to-the-card");

Array.from(products).forEach(product => product.addEventListener("click", event => {
    addToTheCard(event)
}))

const addToTheCard = event => {
    if (event.target.classList.contains("add-to-the-card")){
        setCard(event.target.parentElement.parentElement)
    } 
}; 

const setCard = object => {
    const product = { 
        id: object.id, 
        image: object.querySelector(".product-image").src,
        productName: object.querySelector(".flower-name").textContent,
        productPrice: parseFloat(object.querySelector(".price").textContent),
        productQuantity: parseInt(object.querySelector("#quantity").value)
    }
    
if(shoppingCard.hasOwnProperty(product.id)) {
    
    product.productQuantity = shoppingCard[product.id].productQuantity;

}
shoppingCard[product.id] = {...product}
console.log(shoppingCard);

};


