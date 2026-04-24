// დავალება 1: კლასის შექმნა და ინსტანცია
// შექმენი კლასი სახელად Book (წიგნი).
// კონსტრუქტორმა უნდა მიიღოს ორი პარამეტრი: title (სათაური) და author (ავტორი).
// შექმენი ამ კლასით ერთი ობიექტი (მაგალითად, "ვეფხისტყაოსანი") და გამოიტანე კონსოლში ეს ობიექტი.


class Book{
    constructor(title, author) {
        this._title = title
        this._author = author
    }
}


const book = new Book("ვეფხისტყაოსანი", "შოთა რუსთაველი")

console.log(`დასახელება: ${book._title}, ავტორი: ${book._author}`);



// დავალება 2: მემკვიდრეობითობა (Inheritance)
// გვაქვს მშობელი კლასი Vehicle (ტრანსპორტი):
// class Vehicle {
//   constructor(brand) {
//     this._brand = brand;
//     this._speed = 0;
//   }
//   get brand() { return this._brand; }
//   get speed() { return this._speed; }
  
//   accelerate() {
//     this._speed += 10;
//   }
// }
// შენი დავალებაა:
// შექმენი შვილი კლასი Car, რომელიც მემკვიდრეობით მიიღებს თვისებებს Vehicle-სგან.
// Car კლასის კონსტრუქტორმა უნდა მიიღოს brand და model.
// გამოიყენე super(brand), რომ ბრენდი მშობელ კლასს გადასცე.
// შექმენი მანქანის ეგზემპლარი, აუჩქარე (accelerate()) და დაბეჭდე მისი სიჩქარე.



// class Vehicle {
//   constructor(brand) {
//     this._brand = brand;
//     this._speed = 0;
//   }
//   get brand() { return this._brand; }
//   get speed() { return this._speed; }
  
//   accelerate() {
//     this._speed += 10;
//   }
// }

// class Car extends Vehicle{
//     constructor(brand, model){
//         super(brand)
//         this._model = model
//         this._speed = 0
//     }


// }


// const car = new Car("Mercedes", "E-Class",)

// car.accelerate()
// console.log(`Brand: ${car._brand}, Model: ${car._model}, Speed: ${car._speed}`);










// დავალება 3: მეთოდების დამატება
// გააფართოე წინა დავალების Car კლასი:
// დაამატე Car კლასს ახალი თვისება _fuel (საწვავი), რომელიც თავიდან იქნება 100.
// დაამატე მეთოდი drive(), რომელიც კონსოლში დაბეჭდავს: "მანქანა [brand] [model] მოძრაობს" და საწვავს დააკლებს 10-ს.
// შეამოწმე, მუშაობს თუ არა მეთოდი.




class Vehicle {
  constructor(brand) {
    this._brand = brand;
    this._speed = 0;
  }
  get brand() { return this._brand; }
  get speed() { return this._speed; }
  
  accelerate() {
    this._speed += 10;
  }
}

class Car extends Vehicle{
    constructor(brand, model){
        super(brand)
        this._model = model
        this._fuel = 100
    }


    drive = () => {
        this._fuel -= 10
        console.log(`მანქანა ${this._brand} ${this._model} მოძრაობს`);
        
        
    }

}


const car = new Car("Mercedes", "E-Class",)

car.accelerate()
car.drive()
console.log(`Brand: ${car._brand}, Model: ${car._model}, Speed: ${car._speed}, Fuel: ${car._fuel}`);





