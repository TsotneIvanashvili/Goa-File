import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [time, setTime] = useState(0);
  const [interval, setinter] = useState(0);

  const start = (e) => {
    e.preventDefault();
    setTime(Number(e.target.time.value));
  };

  const updTime = () => {
    if (interval) return;

    const timee = setInterval(() => {
      setTime((time -= 1));
    }, 1000);

    setinter(timee);
  };

  const stopTime = () => {
    clearInterval(interval);
    setinter(0);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl">{time}</h1>

        <div className="flex flex-col gap-5 items-center">
          <form onSubmit={start} className="flex flex-col gap-1.5">
            <input className="border" type="text" name="time" placeholder="Enter Time..." />
            <button className="bg-black text-white p-1.5">Submit</button>
          </form>

        <div className="flex gap-5 w-full justify-center">
          <button className="bg-green-700 p-1.25 w-[50%]" onClick={updTime}>Start</button>
          <button className="bg-red-700 p-1.25 w-[50%]" onClick={stopTime}>Stop</button>
        </div>

        </div>
        

      </div>
    </main>
  );
}

export default App;

// გააკეთეთ ტაიმერის პროექტი, უნდა იყოს ორი ღილაკი start და stop,
// ასევე უნდა იყოს ერთი input ველი სადაც შეიყვანთ დროს და მაგ დროიდან დაიწყება ათვლა უკუთვლით,
// აუცილებლად გასტილეთ საიტი tailwindcss ის გამოყენებით
