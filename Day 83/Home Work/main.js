// დავალება 1: "წიგნების ბიბლიოთეკა" (მარტივი)
// ეს დავალება დაეხმარებათ კონსტრუქტორის და მარტივი მეთოდების გათავისებაში.
// შექმენით კლასი Book.
// კონსტრუქტორი: უნდა იღებდეს წიგნის სათაურს (title), ავტორს (author) და გამოცემის წელს (year).
// მეთოდი getSummary(): უნდა აბრუნებდეს ტექსტს: "წიგნი 'სათაური' დაწერილია 'ავტორი'-ს მიერ 'წელი' წელს."
// მეთოდი getAge(): უნდა აბრუნებდეს, რამდენი წლისაა წიგნი (მიმდინარე წელს გამოკლებული გამოცემის წელი).

// class Book {
//     constructor(title, author, year) {
//         this.title = title
//         this.author = author
//         this.year = year
//     }

//     getSummary() {
//         return `წიგნი ${this.title} დაწერილია ${this.author}-ს მიერ ${this.year} წელს.`
//     }


//     getAge(mimdinare) {
//         return mimdinare - this.year
//     }


// }


// const book = new Book("Vefxvis tyavi", "Tsotne", 2009)

// console.log(book.getSummary());
// console.log(book.getAge(2026));



// დავალება 2: "მართკუთხედის კალკულატორი" (Getter/Setter)
// აქ სტუდენტებმა უნდა ისწავლონ, როგორ გამოიყენონ get და set მონაცემების ვალიდაციისთვის.
// შექმენით კლასი Rectangle.
// კონსტრუქტორი: იღებს სიგანეს (width) და სიმაღლეს (height).
// Getter-ები: area (ფართობი) და perimeter (პერიმეტრი). ეს მნიშვნელობები არ უნდა იყოს შენახული როგორც ცვლადები, არამედ უნდა ითვლებოდეს დინამიურად.
// Setter-ები: სიგანის და სიმაღლის შეცვლისას დაამატეთ შემოწმება: თუ გადაცემული მნიშვნელობა ნაკლებია ან ტოლია 0-ზე, გამოიტანეთ შეცდომა (ან დააყენეთ დეფოლტ მნიშვნელობა 1).

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  
  get width() {
    return this.wwidth
  }
  

  get height() {
    return this.hheight
  }



  set width(value) {
    if(value <= 0){
      console.error("The Width has to be greater than 0")
    }
    this.wwidth = value
  }


  set height(value) {
    if(value <= 0) {
      console.error("The Height has to be greater than 0");
    }
    this.hheight = value
  }


  get area(){
    return this.hheight * this.wwidth
  }

  get perimeter() {
    return 2 * (this.wwidth + this.hheight)
  }



}


const rect = new Rectangle(10, 10);
console.log(rect.area);
console.log(rect.perimeter);  





// დავალება 3: "მომხმარებლის პროფილი" (კომპლექსური)
// ეს დავალება აერთიანებს ყველაფერს და ამატებს უსაფრთხოების ელემენტს.
// შექმენით კლასი User.
// პარამეტრები: username, email და _password (ქვედა ტირე მიანიშნებს, რომ ეს "Private" ცვლადია).
// Getter password: პაროლის წაკითხვის მცდელობისას უნდა აბრუნებდეს დაფარულ ტექსტს (მაგ: "********"), უსაფრთხოების მიზნით.
// Setter password: პაროლის შეცვლამდე უნდა ამოწმებდეს, არის თუ არა ახალი პაროლი მინიმუმ 8 სიმბოლო. თუ არ არის, დაბეჭდოს: "პაროლი ძალიან მოკლეა!".
// მეთოდი changeEmail(newEmail): რომელიც შეცვლის იმეილს მხოლოდ იმ შემთხვევაში, თუ ახალი იმეილი შეიცავს @ სიმბოლოს.



class User{
  constructor(username, email, _password){

  }

  







}