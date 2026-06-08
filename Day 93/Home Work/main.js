import { fetchData } from "./fetch.js";
const mainDiv = document.querySelector("main")
const cart = JSON.parse(localStorage.getItem("Products")) || []


const renderProd = async() => {

    const data = await fetchData("https://fakestoreapi.com/products/")

    data.forEach(product => {
        const div = document.createElement("div")
        product.quantity = 1

        div.innerHTML = `
            <div class="Div">
                <div class="mainDiv">
                    <img src="${product.image}" alt="">

                    <h1>${product.title.length > 50 ? `${product.title.slice(0,50)}...`:product.title}</h1>
                    <div class="price">
                        <h2>Price: $${product.price}</h2>
                        
                    </div>
                    <button class="add">Add to cart!</button>
                </div>
            </div>
        `
        mainDiv.appendChild(div)




        const btn = div.querySelector(".add")
        
        btn.addEventListener("click", () => {

            const existingProduct = cart.find(prod => prod.id === product.id)

            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                cart.push(product)
            }

            localStorage.setItem("Products", JSON.stringify(cart))
            alert("Product Added To Cart!")
            console.log(cart)
        })



    });
    

}

renderProd()


export {cart}