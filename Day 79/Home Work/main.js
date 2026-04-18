// 1. ტექსტის შეცვლა (Selection & Content)
// მიზანი: getElementById და querySelector- ის გამოყენება.
// დავალება: შექმენით HTML ფაილი, სადაც იქნება ერთი <h1> სათაური (აიდით "main-title") და ერთი ღილაკი.
// ინსტრუქცია: ღილაკზე დაჭერისას, JavaScript-ის საშუალებით შეცვალეთ სათაურის ტექსტი და გახადეთ: "ტექსტი წარმატებით შეიცვალა!". გამოიყენეთ ორივე მეთოდი სხვადასხვა ცვლადში შესანახად.
let greet = document.getElementById('main-title')
let user = document.querySelector('button')

function change() {
    greet.innerHTML = "ტექსტი წარმატებით შეიცვალა!"
}

// 2. ელემენტების დინამიური შექმნა (Creation & Appending)
// მიზანი: createElement და appendChild- ის ათვისება.
// დავალება: შექმენით ცარიელი <ul> სია აიდით "my-list".
// ინსტრუქცია: დაწერეთ ფუნქცია, რომელიც ციკლის (for) გამოყენებით შექმნის 5 ცალ <li> ელემენტს, თითოეულში ჩაწერს ტექსტს (მაგ: "ელემენტი 1", "ელემენტი 2"...) და დაამატებს მათ სიაში.

const li = document.createElement("li")
for(let i = 1; i <= 5; i++){
    li.innerHTML += `ელემენტი ${i}, `
    document.body.appendChild(li)
}



// 3. სტილების მასიური შეცვლა (Class & Tags)
// მიზანი: getElementsByClassName და getElementsByTagName- ის გამოყენება.
// დავალება: შექმენით 3 პარაგრაფი (<p>) ერთი და იგივე კლასით "text-item".
// ინსტრუქცია: JavaScript-ით იპოვეთ ყველა ეს პარაგრაფი კლასის მიხედვით და თითოეულს შეუცვალეთ ფერი (მაგალითად, გახადეთ წითელი). შეგახსენებთ სტუდენტებს, რომ ამ დროს ბრუნდება მასივის მსგავსი ობიექტი და საჭიროა ციკლის გამოყენება.

let p = document.getElementsByTagName("p");

let colors = ["green", "red", "blue"];

for (let i = 0; i < p.length; i++) {
  p[i].style.color = colors[i];
}


// 4. წამზომი (setInterval & DOM)
// მიზანი: setInterval-ისა და DOM-ის ერთობლივი მუშაობა.
// დავალება: ეკრანზე გამოიტანეთ ციფრი 0 (მაგალითად, <span> თეგში).
// ინსტრუქცია: setInterval ფუნქციის გამოყენებით გააკეთეთ ისე, რომ ყოველ 1 წამში ეკრანზე მოცემული ციფრი გაიზარდოს ერთით (1, 2, 3...).

let num = document.getElementById("num")
let count = 0
setInterval(() => {
    count ++
    num.innerHTML = count
}, 1000)


// 5. ფერადი კვადრატი (Complex Task)
// მიზანი: ნასწავლი მასალის გაერთიანება.
// დავალება: შექმენით ერთი კვადრატული div (მიეცით ზომები და საწყისი ფერი CSS-ით).
// ინსტრუქცია: setInterval-ის გამოყენებით, ყოველ 2 წამში კვადრატს შეუცვალეთ ფონი (Background Color). ფერები შეგიძლიათ წინასწარ გქონდეთ მასივში და სათითაოდ გადაუყვეთ მათ.

let div = document.getElementById("div")

let backColors = ["red", "green", "blue", "yellow", "purple", "cyan"]

let index = 0


setInterval(() => {
    index++

    div.style.backgroundColor = backColors[index]

}, 1000);