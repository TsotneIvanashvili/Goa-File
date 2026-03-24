// 2) შექმენით პაროლების გენერატორი javascript ის გამოყენებით სადაც:
// prompt ფუნქციის საშუალებით მომხმარებელს შემოაყვანინებთ ჯერ რამდენი პაროლის დაგენერირება სურს,ხოლო შემდეგ რამდენი სიმბოლოსგან უნდა შედგებოდეს პაროლი




function password(){
    let raodenoba = Number(prompt("Enter How Many Passwords You Want To Generate: "));

    let simboloebisRaodenoba = Number(prompt("Enter How Many Symbols You Want The Passwords To Have: "));

    const simboloebi = "1234567890poiuytrewqasdfzcxgvhbjnkml[;]'/.,*_-+!@#$%^&*()PLOKIJUHYGTFRDESWAQZXCVBNM";

    for(let i = 0; i < raodenoba; i++){
        let pass = "";
        
        for(let j = 0; j < simboloebisRaodenoba; j++){
            let randomIndex = Math.floor(Math.random() * simboloebi.length)
            pass += simboloebi[randomIndex]
        }

        console.log(pass);
        

    }

}

password()