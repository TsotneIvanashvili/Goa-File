import { getStorage, setStorage } from "../utils/localstorage.js"
const form = document.querySelector("form")


const users = getStorage("Users") || []



const logIn = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.pass.value


    const exists = users.find(user => user.email === email && user.password === password)


    


    if(exists){


        alert("Succesfully Logged In")
        setStorage("CurrentUser", exists)
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 2000);
        
    }

    else{
        alert("Email and password do not match!");
        
    }
}


form.addEventListener("submit", (e) => {
    logIn(e)
})