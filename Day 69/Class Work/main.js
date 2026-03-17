// 2)ახსენით რა არის block scope, global scope და მოიძიეთ ინფორმაცია lexical scope ზე და ეგეც ახსენით

// block scope-ში ცვლადი ხელმისაწვდომია მხოლოდ იმ ბლოკის შიგნით სადაც ის შეიქმნა
// global scope-ში ცვლადი დის გამოყენება და შეცვლა შეგვიძლია ნებისმიერ ადგილას ფუნქციის ან ბლოკის გარეთ შექმნილი ცვლადი გლობალურია
// lexical scope-ნიშნავს რომ ცვლადის ხელმისაწვდომობა განისაზღვრება კოდის დაწერის მომენტში და არა გაშვების მომენტში

// 3)გააკეთეთ თითო მაგალითი თითო scope ზე და ახსენით კომენტარებით



// block scope
if (true) {
  let x = 10
  console.log(x)
}
console.log(x)




// global scope
let name = "Tsotne"

function greet() {
  console.log(name)
}

greet();
console.log(name)
