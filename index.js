let shoppingCard = {};
const products = document.getElementsByClassName("add-to-the-card");

products.addEventListener("clic", item => {
    addToTheCard(item)
})

const addToTheCard = item => {
    if (item.target.classList.contains("add-to-the-card")){
        setCard(item.target.parentElement)
    } 
}; 

const setCard = object => {
    const product = { 
        id: object.querySelector(".product").id, 
        Image: object.querySelector(".product-image").src,
        productName: object.querySelector(".flower-name").textContent,
        productPrice: object.querySelector(".price").textContent,
        productQuantity: object.querySelector("#quantity").textContent
    }
};
