const users = JSON.parse(localStorage.getItem("Users")) || []

const register = document.getElementById("register")



function renderUsers() {

    document.querySelector("ul").innerHTML = ""

    users.forEach( i => {
        const li = document.createElement("li")
        li.innerHTML = `Email: ${i.email}`

        document.querySelector("ul").appendChild(li)

    });

}



function submitRegister(e) {
    e.preventDefault()


    const username = e.target.userName.value
    const email = e.target.email.value
    const password = e.target.password.value

    const userInfo = {
        username,
        email,
        password
    }


    const userExists = users.some(i => i.email === email)

    if(userExists) {
        alert("AA")
        return;
    }
    else{
        users.push(userInfo)
    }


    
    localStorage.setItem("Users", JSON.stringify(users))

    console.log(users);

    renderUsers()
    
    
}


register.addEventListener("submit", submitRegister)


renderUsers()






// const loginForm = document.getElementById("login")


// function logIn(e) {
//     e.preventDefault()


//     const eemail = e.target.email.value;
//     const ppassword = e.target.password.value;



//     const userExists = users.some(i => 
//         i.email === eemail && i.password === ppassword
//     )

//     if(userExists){
//         alert("Logged In")
//         return;
//     }
//     else{
//         alert("Not Logged In")
//     }





// }



// loginForm.onsubmit = logIn















