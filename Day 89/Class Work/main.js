// // სინქრონიზაციულ პროგრამირებაში მოქმედებები არის განხორციელებული თანმიმდევრობით ზემოდან ქვემოთ მაგალითად:
// console.log("Hello");
// console.log("World");
// // ჯერ დაილოგება "Hello" ხოლო შემდეგ "World"




// // ხოლო ასინქრონიზაციულ პროგრამირებაში მოქმედებებს შეუძლიათ დამოუკიდებლად თანმიმდევრობის გარეშე გაეშვან მაგალითად:

// setTimeout( () => {
//     console.log("Hello");
    
// }, 2000)
// // აქ ვუთითებთ თუ ვებსაიტის ჩატვირთვიდან რამდენ ხანში გაეშვას მასში გადაცემული მოქმედება და ეს დრო განისაზღვრება მილიწამებში
// console.log("World");
// // ჯერ დაილოგება "World" და ორი წამის შემდეგ "Hello"



const promise = new Promise((resolve,reject) => {
    if(false){
        resolve("EE")
        
    }

    else{
        reject("FAS")
        
    }
}).then((resolve) => {
    console.log(resolve);
    
    
}).catch( (reject) => {
    console.error(reject);
    
})


console.log("NGA");
