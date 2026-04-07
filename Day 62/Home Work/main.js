// # 2) რა არის console.log()  დეტალურად ახსენით.
// # console.log() არის JavaScript-ის მეთოდი, რომელიც გამოიყენება მონაცემების გამოსატანად ბრაუზერის კონსოლში







// # 3) ამ სტრინგის მეთოდებზე მოიყვანეთ თითო-თოთო მაგალითი და კოდი ახსენით კომენტარის სახით:
// # .charAt()
let text = "Hello";

console.log(text.charAt(1)); 


// # .concat()
let a = "Hello";
let b = "World";

console.log(a.concat(" ", b)); 

// # .slice()
let tt = "JavaScript";

console.log(tt.slice(0, 4)); 
// "Java" → 0 ინდექსიდან 4-მდე (4 არ შედის)

// # .toUpperCase()
let rr = "hello";

console.log(rr.toUpperCase());
// "HELLO"

// # .toLowerCase()
let gg = "HELLO";

console.log(gg.toLowerCase());
// "hello"

// # .trim()
let hh = "  hello  ";

console.log(hh.trim());

// # .trimStart()
let jj = "  hello";

console.log(jj.trimStart());

// # .trimEnd()
let ll = "hello   ";

console.log(ll.trimEnd());

// # .repeat()
let pp = "Hi ";

console.log(pp.repeat(3));

// # .replace()
let oo = "I like cats";

console.log(oo.replace("cats", "dogs"));

// # .replaceAll()
let cc = "cat cat cat";

console.log(c.replaceAll("cat", "dog"));

// # .split()
let bb = "apple,banana,cherry";

console.log(bb.split(","));

// # .startsWith()
let dd = "JavaScript";

console.log(dd.startsWith("Java"));


// # .endsWith()
let aa = "JavaScript";

console.log(aa.endsWith("Script"));


// # 4) რა არის Math ობიექტი? ეს მეთოდები ახსენით კომენტარის სახით და მოიყვანეთ თითო-თითო მაგალითი:
// Math არის JavaScript-ის ჩაშენებული ობიექტი, რომელიც შეიცავს მათემატიკურ მეთოდებს და კონსტანტებს.


// # Math.round()
console.log(Math.round(4.6)); 


// # Math.ceil()
console.log(Math.ceil(4.1));


// # Math.floor()
console.log(Math.floor(4.9));

// # Math.trunc()
console.log(Math.trunc(4.9));


// # Math.sign()
console.log(Math.sign(-5));


console.log(Math.sign(10));


// # Math.pow()
console.log(Math.pow(2, 3));


// # Math.sqrt()
console.log(Math.sqrt(16));


// # Math.min()
console.log(Math.min(5, 2, 9));

// # Math.max()
console.log(Math.max(5, 2, 9));
