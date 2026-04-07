// გაიაზრეთ მოცემული კოდი და კომენტარებით ახსენით

// const fruit = {
//   name:"Tomato",
//   price:5,
//   get fruitName() {
//     if(this.name && this.price){
//       return `Product is:${this.name} and its price is:${this.price}`
//     }
//   },
//   set category (newCat)  {
//     if (newCat === "Fruit" || newCat === "Vegetable"){
//       this._category = newCat
//     }else{
//       console.log("Error")
//     }
    
//   }

// }

// fruit.category="Fruit"

// დავალება 2: ობიექტის შექმნა და this საკვანძო სიტყვა
// პირობა: შექმენი ობიექტი robot, რომელსაც ექნება შემდეგი თვისებები:
// model (ტექსტი, მაგ: 'R2-D2')
// energyLevel (რიცხვი, მაგ: 100)
// მეთოდი provideInfo(), რომელიც this-ის გამოყენებით კონსოლში დაბეჭდავს ტექსტს: "მე ვარ მოდელი [model] და ჩემი ენერგიაა [energyLevel]%."

const robot = {
  model: "R2-D2",
  energyLevel: 100,
  provideInfo: function() { 
    console.log(`მე ვარ მოდელი ${this.model} და ჩემი ენერგიაა ${this.energyLevel}`);
    
  }
}

robot.provideInfo()

// დავალება 3: სტუდენტმა უნდა გაასწოროს ის ისე, რომ this სწორად მუშაობდეს.

const smartphone = {
  brand: 'Apple',
  battery: 85,
  checkBattery: function(){
    console.log(`ბატარეა არის: ${this.battery}%`); // აქ არის შეცდომა!
  }
};

smartphone.checkBattery();

// დავალება 4: Getters & Setters (მონაცემთა დაცვა)
// პირობა: შექმენი ობიექტი bankAccount, რომელიც გააკონტროლებს თანხის მითითებას.
// დაამატე თვისება _balance (საწყისი მნიშვნელობა 0).
// შექმენი Getter balance, რომელიც დააბრუნებს ტექსტს: "თქვენს ანგარიშზეა: [თანხა] ლარი".
// შექმენი Setter deposit, რომელიც მიიღებს ახალ მნიშვნელობას. თუ გადაცემული მნიშვნელობა არის რიცხვი და მეტია 0-ზე, განაახლოს _balance. წინააღმდეგ შემთხვევაში, დაბეჭდოს: "გთხოვთ, შეიყვანოთ სწორი თანხა".

const bankAccount = {
  balance: 0,
  get Ballance(){
    return `თქვენს ანგარიშზეა: ${this.balance} ლარი`; 
  },

  set deposit(money){
    if(money > 0){
      this.balance = money
    }
    else{
      console.log(`დეპოზიტის თანხა უნდა აღემატებოდეს 0 ლარს`);
      
    }
  }
}

console.log(bankAccount.Ballance);
bankAccount.deposit = 10

console.log(`დეპოზიტის შემდეგ ${bankAccount.Ballance}`);


// დავალება 5:შექმენი constructor createCourse(title, instructor, duration).
// დაამატე მეთოდი getSummary(), რომელიც დააბრუნებს კურსის მოკლე აღწერას.


function createCourse(title, instructor, duration){
  this.title = title
  this.instructor = instructor
  this.duration = duration
  this.getSummary = () => {
    return `მოგესალმებით ${this.title} კურსზე, თქვენი ინსტრუქტორი იქნება: ${this.instructor}, ლექციების ხანგრძლივობა არის: ${this.duration} საათი`;
  }
}


const course = new createCourse("NextGen","Tsotne",2)

console.log(course.getSummary());

