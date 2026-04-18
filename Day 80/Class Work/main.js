// 1)შექმენით სარეგისტრაციო ფორმა რომელიც შედგება: სახელისგან, იმეილისგან და პაროლისგან,
// დადასტურებული მონაცემები უნდა დაემატოს მასივში ობიექტის სახით, აუცილებლად გადაამოწმეთ თუ ორი მომამხარებელი ერთი და იგივე იმეილით იქნება რეგისტრირებული, 
// alert()ფუნქციის დახმარებით გამოუტანეთ რომ მომხმარებელი უკვე არსებობს და არ ჩაამატოთ მისი მონაცემები მასივში


// const users = []

// const registerForm = document.getElementById("register")

// function register(e) {
//     e.preventDefault()

//     const username = e.target.userName.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const userExists = users.some(user => user.username === username);

//     if (userExists) {
//         alert("Username already exists");
//         return;
//     }

//     const userInfo = { username, email, password };
//     users.push(userInfo);

//     console.log(users);
// }




// registerForm.onsubmit = register;








// const loginForm = document.getElementById("login")

// function login(e) {
//     e.preventDefault()
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const userExists = users.some(user => user.password === password && user.email === email);

//     if(userExists) {
//         alert("Succesfully logged in")
//     }
//     else{
//         alert("email or password invalid")
//     }

    
// }




// loginForm.onsubmit = login;






















const users = []


const register = document.getElementById("register")


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


    

    console.log(users);
    

    

}


register.onsubmit = submitRegister




const loginForm = document.getElementById("login")


function logIn(e) {
    e.preventDefault()


    const eemail = e.target.email.value;
    const ppassword = e.target.password.value;



    const userExists = users.some(i => 
        i.email === eemail && i.password === ppassword
    )

    if(userExists){
        alert("Logged In")
        return;
    }
    else{
        alert("Not Logged In")
    }





}



loginForm.onsubmit = logIn















