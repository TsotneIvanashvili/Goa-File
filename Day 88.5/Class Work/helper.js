let cart = []


const addToCart = (element) => {

    let product = {
        name: element.querySelector("h3").textContent,
        price: element.querySelector("#price").textContent,
        image: element.querySelector("img").src,
        category: element.querySelector("#category").textContent,
        quantity: 1
    }

    const exists = cart.find( product => product.name === element.querySelector("h3").textContent)
    
    if(exists){
        exists.quantity++
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    else{
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    
}

export {cart, addToCart}