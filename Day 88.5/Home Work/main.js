import {getStorage, setStorage } from "./localStorage.js"
const product = Array.from(document.querySelectorAll(".product"))

let cart = getStorage("Products") || [];


const addToCart = (product) => {

    let productObj = {
        image: product.querySelector("img").src,
        name: product.querySelector("h2").textContent,
        price: product.querySelector("h3").textContent,
        category: product.querySelector("h6").textContent,
        quantity: 1

    }

    const exists = cart.find(prod => prod.name === product.querySelector("h2").textContent)

    if(exists) {
        exists.quantity++
        setStorage("Products", cart)
    }
    else{
        cart.push(productObj)
        setStorage("Products", cart)
    }


}   




product.forEach( element => {
    const button = Array.from(element.getElementsByClassName("buttons"))
    
    button.forEach( butt => {
        butt.addEventListener("click", () => {
            addToCart(element)
        })
    })
    
})




export {cart}
