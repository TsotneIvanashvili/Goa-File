// 1) შექმენი 3-ი ცვლადი ჯერ შეინახეთ თქვენი სახელი,გვარი,საყვარელი სპორტი, სტრინგ ლიტერალის გამოყენებით გამოიტანეთ ერთი დიდი წინადადება.

// 2)შექმენი სია სადაც შეინახავთ ნებისმიერ მონაცემთა ტიპის ელემენტს, შენი დავალებაა ამოიღო სიიდან ერთი რანმომული ელემენტი და გამოიტანო კონსოლში, მინიშნება: Math.random()



const namee = "Tsotne";
const lName = "Ivanashvili";
const favSport = "Boxing";

console.log(`My  Name is: ${namee} ${lName}, My Favourite Sport is: ${favSport}`);


const list = ["apple", 25, true, {name: "Luka"}, [1, 2, 3]];

function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);
}

random(list);