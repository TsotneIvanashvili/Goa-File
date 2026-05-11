// 1. დაპირება მეგობარს (Simple Promise)
// შექმენი ცვლადი isSuccess. შექმენი Promise, რომელიც:
// თუ isSuccess არის true, resolve-დება ტექსტით: "შესრულდა წარმატებით!".
// თუ isSuccess არის false, reject-დება ტექსტით: "მოხდა შეცდომა!".
// გამოიყენე .then() და .catch(), რომ შედეგი კონსოლში დაბეჭდო.

// let isSuccess = new Promise( (resolve,reject) => {
//     if (true){
//         resolve("შესრულდა წარმატებით!")
//     }
//     else{
//         reject("მოხდა შეცდომა!")
//     }
// })
// .then( (msg) => {
//     console.log(msg);
    
// })
// .catch( (err) => {
//     console.error(err);
    
// })




// 2. "დაგვიანებული" მისალმება (setTimeout-ის გამოყენება)
// შექმენი ფუნქცია sayHello, რომელიც აბრუნებს Promise-ს.
// Promise-მა 2 წამის შემდეგ უნდა დააბრუნოს (resolve) ტექსტი: "გამარჯობა, სამყარო!".
// გამოიყენე setTimeout ფუნქციის შიგნით.



// const sayHello = () => {
//     setTimeout( () => {
//         return new Promise( (resolve, reject) => {
//             if(true){
//                 resolve("გამარჯობა, სამყარო!")
//             }
//             else{
//                 reject("ნახვამდის, სამყარო!")
//             }
//         })

//         .then( (msg) => {
//             console.log(msg);
            
//         })
//         .catch( (err) => {
//             console.log(err);
            
//         })
//     }, 2000);
// }
// sayHello()


// 3. ციფრების შემოწმება
// შექმენი ფუნქცია checkNumber(num), რომელიც აბრუნებს Promise-ს:
// თუ num მეტია 10-ზე, დააბრუნე წარმატება: "რიცხვი ვალიდურია".
// თუ ნაკლებია ან ტოლია, დააბრუნე შეცდომა: "რიცხვი ძალიან პატარაა".
// გამოიძახე ეს ფუნქცია სხვადასხვა ციფრით და ნახე ორივე შემთხვევა.


// function checkNumber(num) {
//     return new Promise( (resolve,reject) => {
//         if (num > 10){
//             resolve("რიცხვი ვალიდურია")
//         }
//         else{
//             reject("რიცხვი ძალიან პატარაა")
//         }
        
//     })
//     .then( msg => {
//         console.log(msg);
            
//     })
//     .catch( err => {
//         console.log(err);
        
//     })
// }


// checkNumber(12)
// checkNumber(10)




// 4. მონაცემების "მოპოვება" (Data Fetching simulation)
// წარმოიდგინე, რომ სერვერიდან მოგაქვს მომხმარებლის სახელი.
// შექმენი ფუნქცია getUserData().
// Promise-მა 1.5 წამის შემდეგ უნდა დააბრუნოს ობიექტი: { name: "გიორგი", age: 25 }.
// დაბეჭდე კონსოლში მხოლოდ მომხმარებლის სახელი.

 
// function getUserData(name,age) {

//     setTimeout(() => {
//         return new Promise( (resolve) => {
//             resolve({name,age})
//         })
//         .then( res => {
//             console.log(res);
            
//         })
//     }, 1500);
   

// }

// getUserData("გიორგი", 25)


