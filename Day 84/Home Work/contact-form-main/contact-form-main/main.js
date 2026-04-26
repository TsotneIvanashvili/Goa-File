const form = document.getElementById("contactForm")


const userArr = JSON.parse(localStorage.getItem("Users")) || []


function userFunc(e) {
    e.preventDefault()   

    const fName = e.target.firstName.value
    const lName = e.target.lastName.value
    const email = e.target.email.value
    const message = e.target.message.value
    
    const userInfo = {
        fName,
        lName,
        email,
        message
    }


    const userExists = userArr.some(i => i.email === email)


    if(userExists){
        throw new Error("User With The Following Email Already Exists!")
    }
    


    userArr.push(userInfo)


    
    localStorage.setItem("Users", JSON.stringify(userArr))
    
    

}



form.addEventListener("submit", (e) => {
    e.preventDefault()
    userFunc(e)
    window.location.href = "./login.html"




})