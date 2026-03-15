const moves = ["rock", "paper", "scissors"];

let user = prompt("Enter Your Move (Rock, Paper, Scissors):").toLowerCase();

while (user !== "rock" && user !== "paper" && user !== "scissors") {
    user = prompt("Please Enter a Valid Move (Rock, Paper, Scissors):").toLowerCase();
}

function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const computer = random(moves);

console.log("Computer:", computer);

if (user === computer) {
    alert("It's a Tie");
}
else if ( user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === "scissors" && computer === "paper") {
    alert("You Win");
}
else {
    alert("You Lose");
}

