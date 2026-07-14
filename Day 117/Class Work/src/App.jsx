import { useEffect, useState } from 'react'
import './App.css'
import axios from"axios"


// json server-ი გვეხმარება ჩვენ რომ შევქმნათ მონაცემთა ბაზის პროტოტიპი და გამოვიყენოთ ის 


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/users").then(res => setUsers(res.data))
  },[] )


  console.log(users);
  

  return (
    <div>
      {
        users.map( user => {
          return(
              <div>
                <h1>{user.name}</h1>
              <h1>{user.role}</h1>
              </div>
          )
        })
      }
    </div>
  )
}

export default App
