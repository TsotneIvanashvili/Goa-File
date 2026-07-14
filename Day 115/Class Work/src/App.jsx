import { useMemo, useState } from 'react';
import './App.css'
import ExpensiveCalculator from './components/ExpensiveCalculator'

function App() {


  const [num, setNum] = useState(0)
  const [text, setText ] = useState("")

  function findPrimesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }

    console.log("re-calculations", primes);
    return primes;
  }


  const completed = useMemo( ()=> {
    findPrimesUpTo(num)
  }, [num])


  return (
    <div>
      <ExpensiveCalculator/>


      <input type="number" onChange={(e) => setNum(e.target.value)} />

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  )
}

export default App



// 🧠1) დავალება: ოპტიმიზაცია useMemo-ით
// შექმენი React კომპონენტი სახელად ExpensiveCalculator, რომელიც:

// აქვს input ველი, სადაც მომხმარებელი შეიტანს რიცხვს.
// რიცხვის ცვლილებისას გამოითვლება ძალიან რთული ფუნქცია (მაგ., რიცხვის უზარმაზარი ფაქტორიალი ან დიდი ციკლი).
// ამ რთული ფუნქციის შედეგი გამოისახება ეკრანზე.
// გვერდით არის სხვა input ველი, რომელიც უბრალოდ ტექსტს იღებს და არ უნდა გამოიწვიოს რთული ფუნქციის თავიდან გამოთვლა.
// გამოიყენე useMemo, რომ რთული გამოთვლა შესრულდეს მხოლოდ მაშინ, როცა რიცხვი იცვლება.


// 2) გამოიყენეთ useMemo კაუჭი, იმისათვის რომ მოახდინოთ 

// function findPrimesUpTo(n) {
//   const primes = [];
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) primes.push(i);
//   }

//   console.log("re-calculations", primes);
//   return primes;
// }


// ამ ფუნქციის მიერ დაბრუნებული მნიშვნელობის ქეშირეება, რადგან ძვირიანი გამოთვლა თავიდან არ გაეშვას


// ახსენით კომენტარებით რა არის expensive calculation, რას აკეთებს useMemo, რა არის ქეშირება 

// expensive calculation არის ისეთი მოქმედება როდესაც ხდება მძიმე მოქმედების განხორციელება, 
// useMemo აკეთებს იმას რომ რე-რენდერინგი მოხდეს მხოლოდ იმ შემთხვევაში თუ მასში გადაცემული dependency array შეიცვლება