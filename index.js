let shoppingCard = {};
const products = document.getElementsByClassName("add-to-the-card");

Array.from(products).forEach(product => product.addEventListener("click", event => {
    addToTheCard(event)
}))

const addToTheCard = event => {
    if (event.target.classList.contains("add-to-the-card")){
        setCard(event.target.parentElement)
    } 
}; 

const setCard = object => {
    const product = { 
        id: object.id, 
        image: object.querySelector(".product-image").src,
        productName: object.querySelector(".flower-name").textContent,
        productPrice: object.querySelector(".price").textContent,
        productQuantity: object.querySelector("#quantity").value
    }
    console.log(product);
};
