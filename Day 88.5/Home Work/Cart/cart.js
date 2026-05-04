import { cart } from "../main.js";
import { setStorage } from "../localStorage.js";

const main = document.getElementById("main");


const renderCart = (cartItems) => {
    main.innerHTML = "";

    if (cartItems.length === 0) {
        main.innerHTML = "<h2>Your cart is empty.</h2>";
        return;
    }

    cartItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "prodDiv";

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="Text"> 
                <h2>Name: ${item.name}</h2> 
                <h6>Category: ${item.category}</h6> 
                <h3>Price: ${item.price}$</h3> 
                <h3>Quantity: ${item.quantity}</h3> 
            </div>
        `;

        main.appendChild(div);
    });
};
renderCart(cart);










