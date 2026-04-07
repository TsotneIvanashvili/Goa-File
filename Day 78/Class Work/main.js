const value = document.getElementById("value")

const plus = document.getElementById("inc")

const minus = document.getElementById("dec")

const reset = document.getElementById("res")

let count = 0

const increase = () => {
    count ++;
    value.innerHTML = count;
}


const decrease = () => {
    count--;
    if(count < 0 ){
        count = 0
    }
    value.innerHTML = count
}

plus.onclick = increase

minus.onclick = decrease

const res = () => {
    count = 0
    value.innerHTML = count
}

reset.onclick = res