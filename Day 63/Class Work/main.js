const moves = ["rock", "paper", "scissors"];

let user = prompt("Enter Your Move (Rock, Paper, Scissors):").toLowerCase();

function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const computer = random(moves);

console.log("Computer:", computer);

if (user === "rock" && computer === "paper") {
    alert("You Lose");
}
else if (user === "scissors" && computer === "paper") {
    alert("You Win");
}
else if (user === "rock" && computer === "scissors") {
    alert("You Win");
}
else if (user === computer) {
    alert("It's a Tie");
}