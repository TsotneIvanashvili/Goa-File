// 1)შექმენით ობიექტი სადაც შეინახება მომხმარებლის ინფორმაცია (სახელი,გვარი, ასაკი, ქალაქი და ა.შ) ეს ობიექტი გააკეთეთ constructor ის გამოყენებით

function Person(fName, lName, age, country, city){
    this.firstName = fName
    this.lastName = lName
    this.age = age
    this.country = country
    this.city = city
}


const userInfo = new Person("Tsotne", "Ivanashvili", 17, "Georgia", "Tbilisi")

console.log((userInfo));


// 2)მოიძიეთ ინფორმაცია რას აკეთებს this და new keywordებზე და ახსენით კომენტარებით ასევე მაგალითებიც მოიყვანეთ
// ობიექტში this გამოყენებისას ის მიუთითებს ობიექტზე

function Person(fName, lName, age, country, city){
    this.firstName = fName
    this.lastName = lName
    this.age = age
    this.country = country
    this.city = city
}


const pers = new Person("Tsotne", "Ivanashvili", 17, "Georgia", "Tbilisi")

console.log((pers));

// new - აქცევს ფუნქციას მეთდად და მასში გადაცემული ინფორმაცია ინახება ობიექტის სახით

function skill(skill1, skill2){
    this.skill1 = skill1
    this.skill2 = skill2
    
}

const skills = new skill("Html", "Css")

console.log(skills);


