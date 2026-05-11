// 1) შექმენი 3-ი ცვლადი ჯერ შეინახეთ თქვენი სახელი,გვარი,საყვარელი სპორტი, სტრინგ ლიტერალის გამოყენებით გამოიტანეთ ერთი დიდი წინადადება.
const name = "tsotne"
const lName = "Ivanashvili"
const sport = "Football"

console.log(name + " " + lName+ " " + sport);


// 2)შექმენი სია სადაც შეინახავთ ნებისმიერ მონაცემთა ტიპის ელემენტს, შენი დავალებაა ამოიღო სიიდან ერთი რანმომული ელემენტი და გამოიტანო კონსოლში, მინიშნება: Math.random()

const sia = [1,2,4,5,2,6]

const index = Math.round(Math.random() * sia.length)

console.log(sia[index]);

