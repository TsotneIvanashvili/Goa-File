import User from "../utils/users.js"
import { setStorage, getStorage } from "../utils/localstorage.js"
const form = document.querySelector("form")

const users = getStorage("Users") || []


const signUp = (e) => {
    e.preventDefault()

    const fName = e.target.fName.value
    const lName = e.target.lName.value
    const email = e.target.email.value
    const password = e.target.password.value

    const user = new User(fName, lName, email, password)

    const userExists = users.some( info => info.email === email)
    
    if(userExists){
        alert("Email Already In Use")
    }
    else{
        users.push(user)
    }

    setStorage("Users", users)

    
    
}




form.addEventListener("submit" , (e) => {
    signUp(e)
})

