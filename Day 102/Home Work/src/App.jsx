import { useState } from 'react'
import './App.css'

function App() {

  const date = new Date()

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)


  const calculation = (e) => {
    e.preventDefault()

    const dayy = e.target.day.value
    const monthh = e.target.month.value
    const yearr = e.target.year.value


    setDay(date.getDay() - dayy)
    setMonth(date.getDay() - monthh)
    setYear(date.getDay() - yearr)

    
    console.log(date.getDate());
    
    

  }
  
  

  return (
   <div>

    <form action="" onSubmit={calculation}>
      <input type="text" placeholder='Day...' name='day'/>
      <input type="text" placeholder='Month...' name='month'/>
      <input type="text" placeholder='Year...' name='year'/>
      <button>submit</button>
    </form>


    <h1>{day}</h1>
    <h1>{month}</h1>
    <h1>{year}</h1>

   </div>
  )
}

export default App
