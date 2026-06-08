const main = document.getElementById("firstDiv")
let cart = JSON.parse(localStorage.getItem("Products")) || []



const delProd = (index) => {

    cart = cart.filter( (_,prodId) => prodId !== index)
    localStorage.setItem("Products", JSON.stringify(cart))
    renderCart()

}


const plus = (prod) => {
    prod.quantity++
    renderCart()
}

const minus = (prod) => {
    prod.quantity--
    renderCart()
}







const renderCart = async () => {
    main.innerHTML = ""
    const emptyDiv = document.createElement("div")


    if(cart.length === 0){
        emptyDiv.innerHTML = `
            <h1>Cart Is Empty!</h1>
        `

        main.appendChild(emptyDiv)
        
    }



    await cart.forEach((prod,index) => {

        const div = document.createElement("div")

        const price = prod.quantity * prod.price



        div.innerHTML = `
            <div class="Div">
                <div class="mainDiv">
                    <img src="${prod.image}" alt="">

                    <h1>${prod.title.length > 50 ? `${prod.title.slice(0,50)}...`: prod.title}</h1>
                    <div class="price">
                        <h2>$${price}</h2>
                        <div class="quantity">
                            <button class="minus">-</button>
                            <h2>Quantity: ${prod.quantity}</h2>
                            <button class="plus">+</button>
                        </div>
                    </div>
                    <button class="del"> Delete Product </button>


                </div>
            </div>
        `

        main.appendChild(div)



        div.querySelector(".plus").addEventListener("click", () => {
            if(prod.quantity >= 5){
                alert("Maximum Quantity Reached!")
                
                
            }
            else{
                plus(prod)
                localStorage.setItem("Products", JSON.stringify(cart))

            }
        })

        div.querySelector(".minus").addEventListener("click", () => {
            if(prod.quantity < 2){
                delProd(index)
            }
            else{
                minus(prod)
                localStorage.setItem("Products", JSON.stringify(cart))

            }
        })

        const delBtn = div.querySelector(".del")
        delBtn.addEventListener("click", () => {
            delProd(index)
            
        })

    });

    


}

renderCart()