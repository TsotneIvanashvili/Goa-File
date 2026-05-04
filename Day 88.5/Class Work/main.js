import {cart, addToCart} from "./helper.js"

const mainProducts = Array.from(document.getElementsByClassName("card"))
const cartDiv = document.getElementById("cart")

const renderCart = () => {


    cartDiv.innerHTML = ""
    


    cart.forEach( product => {
        const div = document.createElement("div")
        div.innerHTML = `
        <img src="${product.image}" alt="">
        <p id="category">${product.category}</p>
        <h2 class="title">${product.name}</h2>
        <h3 id="price">${product.price}</h3>
        <p>Quantity: <button>-</button> ${product.quantity} <button>+</button><p>
        <hr>
        
        `
        cartDiv.appendChild(div)
    })

    

}




mainProducts.forEach( product => {
    const button = product.querySelector("button")
    button.addEventListener("click", () => {
        addToCart(product)
        renderCart()
        
    })
        
})


