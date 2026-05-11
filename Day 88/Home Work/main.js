// გაიაზრეთ დეტალურად ეს კოდი


let products = Array.from(document.getElementsByClassName("product"));
const cartDiv = document.getElementById("cart")

let cart = [];


const addProduct = (element) => {
    const exists = cart.find(product => product.productName === element.productName)
    
    if(exists){
        exists.quantity ++
    }else{
        cart.push(element)
    }
    
    console.log(cart)
}



const renderCart = () => {
    cartDiv.innerHTML = ""


    cart.forEach((product) => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.textContent = `
        ${product.productName} - ${product.quantity}
        `
        ul.appendChild(li)
        cartDiv.appendChild(ul)
    })


}



products.forEach(product => {
    product.querySelector("button").addEventListener("click", () => {
        const controls = document.getElementById("controls")
        console.log(minus,plus)
        let count = 1;

        let productData = {
            productName: product.querySelector("h2").textContent,
            quantity:count,
        }
        addProduct(productData)
        renderCart()

    })
})