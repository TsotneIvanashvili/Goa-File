const form = document.querySelector("form")

const fetchData = async (url) => {
    const data = await fetch(url)
    const response = await data.json()
    return response
}

const users = []


const userr = async(e) => {
    e.preventDefault()
    const name = e.target.name.value
    const data = await fetchData(`https://api.github.com/users/${name}`)
    const div = document.createElement("div")

    div.innerHTML = `
        <h1>Name: ${data.login}</h1>
        <img src="${data.avatar_url}">
        <h2>Followers: ${data.followers} </h2>
        <h2>Following: ${data.following} </h2>
        <h2>Amount Of Repositories: ${data.public_repos}</h2>
        <a href="${data.html_url}">Profile Url</a>
    `


    if(users.some(user => user.login == name)){
        alert("User Already Shown")
        
    }
    else if(name === ""){
        alert("Input Cannot Be Empty")
    }
    else{
        users.push(data)
        form.appendChild(div)
    }



}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    userr(e)
})
