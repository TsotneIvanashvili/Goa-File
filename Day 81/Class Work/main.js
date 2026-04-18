const form = document.querySelector("form")

let tasks = []



function showTasks() {
    document.querySelector("ul").innerHTML = ""
    
    tasks.forEach( (i, index) => {
        const li = document.createElement("li")

        li.innerHTML = `${i} <button onclick="delFunc(${index})">Del</button>`

        document.querySelector("ul").appendChild(li)


    })
    
}




function addTasks(e) {
    e.preventDefault()
    const task = form.task.value

    if(tasks.some( i => i === task)){
        alert("Task Already Added!")
        return
    }
    else if(task === ""){
        alert("Cant Add Blank Task")
        return
    }
    tasks.push(task)

    showTasks()

    e.target.reset()
    
}

function delFunc(index) {
    tasks.splice(index,1)


    showTasks()
}



form.addEventListener("submit", addTasks)

