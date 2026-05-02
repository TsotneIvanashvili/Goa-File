const ul = document.getElementById("maincontent");
const button = document.querySelector("button");
const users = JSON.parse(localStorage.getItem("Users")) || []

let index = 0


function create(e) {
    e.preventDefault();

    const h2 = document.createElement("h2");

    if(index >= users.length) {
        
        h2.innerHTML = "No More Users!"

        ul.appendChild(h2)
        button.innerHTML = "<button disabled>Stop!</button>"
        button.style.cursor = "not-allowed"
        return

    }

        const h1 = document.createElement("h1")
        h1.innerHTML = `Full Name: ${users[index].fName} ${users[index].lName}, <br></br> Email: ${users[index].email}`
        ul.appendChild(h1)
  
    index++



}

button.addEventListener("click", (e) => {
    create(e)
});


