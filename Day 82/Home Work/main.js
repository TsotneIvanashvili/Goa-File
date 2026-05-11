გაიაზრეთ ეს კოდი


const users = JSON.parse(localStorage.getItem("Users")) || []
const form = document.getElementById("registerForm");
const ul = document.querySelector("ul");

console.log(users)




function registerUser(e) {
    e.preventDefault();
    const email = form.email.value
    const password = form.password.value

    const newUser = {
        email,
        password,
    }

    const userExists = users.some((user) => user.email === newUser.email)
    if (userExists) {
        alert("Email already exists")
        return
    }
    users.push(newUser)
    
    localStorage.setItem("Users", JSON.stringify(users))
    
    alert("you have successfully registered")
    location.href = "./login.html";
}


const loginForm = document.getElementById("loginForm")


const login = (e) =>{
    e.preventDefault()

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if(users.some(user=> user.email === email && user.password === password)){
        alert("Succesfully logged in!")
    }else{
        alert("Pass or email is incorrect!")
    }

}



if (location.href) form.addEventListener("submit", registerUser);
if (loginForm) loginForm.addEventListener("submit", login);