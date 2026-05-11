// 1)ახსენით ეს მეთოდები კომენტარებით და მოიყვანეთ 2-2 მაგალითი თითოეულზე:
// .length აბრუნებს სიის ან სტრინგის სიგრძეს

// const name = "Tsotne"

// console.log(name.length);

// const sia = [1,2,3,4,5,6,"ss",1.32,true]
// console.log(sia.length);




// .join() მასივის ელემენტებს აერთიანებს

// const word = ["A","p","p","l","e"]

// console.log(word.join(""));


// const num = [1,2,3,4,5,6]

// console.log(num.join(""));




// .toString() აქცევს გადაცემულ მნიშვნელობას სტრინგად

// const age = 17

// console.log(age.toString()); 
// თუ Node-ით გაუშვებ მაშინ typeof დაუწერეთ რომ მონაცემთა ტიპი გაიგოთ გადააქცია თუ არა რადგან VS code ტერმინალში სტრინგის ბრჭყალები არ გამოაქვს



// const masivi = [1,5,3,2,1,4,5,8]

// console.log(masivi.join("").toString());




// .pop() მასივიდან შლის ბოლო ელემენტს
// const masivi = [1,5,3,2,1,4,5,8]
// masivi.pop()
// console.log(masivi);


// const names = ["Tsotne","nika","luka","tika"]
// names.pop()

// console.log(names);


// .push() ამატებს მასში გადაცემულ ელემენტს მასივის ბოლოში
// const masivi = [1,6,3,1]
// masivi.push("12")
// console.log(masivi);


// const user = ["tsotne", 17, "Nika"]
// user.push(17)
// console.log(user);




// .shift() შლის პირველ ელემენტს მასივიდან
// const masivi = [1,5,3,2,1,4,5,8]
// masivi.shift()
// console.log(masivi);


// const names = ["Tsotne","nika","luka","tika"]
// names.shift()

// console.log(names);




// Array.isArray(); აბრუნებს  მასში გადაცემული მნიშვნელობა არის თუ არა მასივი და მხოლოდ აბრუნებს true და false
// const names = ["Tsotne","nika","luka","tika"]
// console.log(Array.isArray(names));


// const name = "Tsotne"
// console.log(Array.isArray(name));



// .concat() აერთიანებს ორ ან მეთ მასივს ერთად და აბრუნებს ახალ მასივს
// const names = ["Tsotne","nika","luka","tika"]
// const masivi = [1,5,3,2,1,4,5,8]

// console.log(names.concat(masivi));

// const names = ["Tsotne","nika","luka","tika"]
// const masivi = [1,5,3,2,1,4,5,8]
// const bill = [100,200,300,400]
// console.log(names.concat(masivi, bill));


// .slice() მასივიდან იღებს მასში პირველი გადაცემული ინდექსიდან მეორე გადაცემულ ინდექსამდე და ასევე გადაეცემა ინდექსი ეს ნიშნავს თუ რამდენი ელემენტი გამოტოვოს საბოლოო ინდექსამდე
// const masivi = [1,5,3,2,1,4,5,8]
// masivi.slice(1,4,2)
// console.log(masivi);



// const names = ["Tsotne","nika","luka","tika"]
// names.slice(1,2)
// console.log(names);


// .splice() -ს შეუძლია იგივე გააკეთოს რაც slice() შეუძლია და ასევე შეუძლია ჩაამატოს ელემენტი ამოშლის დროს



// const months = ['Jan', 'March', 'April'];
// months.splice(1, 0, 'Feb'); 
// console.log(months); 


// months.splice(2, 1); 
// console.log(months); 




