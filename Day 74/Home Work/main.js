const users = [
  { id: 1, name: "ანი", age: 22, active: true, score: 85 },
  { id: 2, name: "ნიკა", age: 17, active: false, score: 45 },
  { id: 3, name: "მარიამი", age: 25, active: true, score: 92 },
  { id: 4, name: "გიორგი", age: 30, active: true, score: 70 },
  { id: 5, name: "სალომე", age: 16, active: false, score: 55 }
];



// 1. .forEach() - მოქმედების შესრულება თითოეულზე:
// დავალება 1: გამოიტანე კონსოლში თითოეული მომხმარებლის სახელი.
users.forEach(user => {
  console.log(user.name);
});


// დავალება 2: დაბეჭდე კონსოლში მხოლოდ იმ მომხმარებლების სახელები, რომლებიც აქტიურები არიან (active: true).
users.forEach(user => {
  if (user.active) {
    console.log(user.name);
  }
});


// დავალება 3: თითოეული მომხმარებლისთვის კონსოლში გამოიტანე ტექსტი: "[სახელი] არის [ასაკი] წლის".
users.forEach(user => {
  console.log(`${user.name} არის ${user.age} წლის`);
});


// დავალება 4: forEach-ის გამოყენებით თითოეულ ობიექტს პირდაპირ დაუმატე ახალი თვისება (property) passed: true ან passed: false, იმის მიხედვით, მათი ქულა (score) მეტია თუ არა 50-ზე.
users.forEach(user => {
  user.passed = user.score > 50;
});






// 2. .map() - ახალი მასივის შექმნა / ტრანსფორმაცია:
// დავალება 1: შექმენი ახალი მასივი, რომელშიც მხოლოდ მომხმარებლების სახელები იქნება (მაგ: ["ანი", "ნიკა", ...]).
const names = users.map(user => user.name);
console.log(names);


// დავალება 2: შექმენი ახალი მასივი, სადაც თითოეული მომხმარებლის ქულა (score) გაზრდილი იქნება 10-ით.
const increasedScores = users.map(user => ({
  ...user,
  score: user.score + 10
}));
console.log(increasedScores);


// დავალება 3: შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ ობიექტებს ორი თვისებით: name და age (სხვა ინფორმაცია ამოშალე).
const nameAndAge = users.map(user => ({
  name: user.name,
  age: user.age
}));
console.log(nameAndAge);


// დავალება 4: შექმენი ახალი მასივი, სადაც გექნება ასეთი ფორმატის სტრინგები: "ანი - 85 ქულა".
const formatted = users.map(user => `${user.name} - ${user.score} ქულა`);
console.log(formatted);





// 3. .filter() - მონაცემების გაფილტვრა:
// დავალება 1: გაფილტრე და მიიღე მხოლოდ ის მომხმარებლები, რომლებიც სრულწლოვნები (18 წლის ან მეტის) არიან.
const adults = users.filter(user => user.age >= 18);
console.log(adults);


// დავალება 2: მიიღე ახალი მასივი მხოლოდ იმ მომხმარებლებით, რომლებიც არ არიან აქტიურები (active: false).
 const inactiveUsers = users.filter(user => !user.active);
console.log(inactiveUsers);


// დავალება 3: გაფილტრე მომხმარებლები, რომელთა ქულა 80-ზე მეტია.
const highScores = users.filter(user => user.score > 80);
console.log(highScores);


// დავალება 4: მიიღე მხოლოდ ის მომხმარებლები, რომელთა სახელიც 4 ასოზე გრძელია.
const longNames = users.filter(user => user.name.length > 4);
console.log(longNames);