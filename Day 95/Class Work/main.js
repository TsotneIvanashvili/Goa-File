import { getStorage } from "./utils/localstorage.js";

const main = document.querySelector("main")
const user = getStorage("CurrentUser")
const div = document.createElement("div")

function renderUser(){
    if(user !== null){
        div.innerHTML = ` 
        <h1>${user.fName}</h1>
        
        `
        main.appendChild(div)
    }
    else{
        console.error("A");
        
    }
}

renderUser()