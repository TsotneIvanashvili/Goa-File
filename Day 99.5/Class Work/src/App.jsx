import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const register = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    
    if(users.some(i => i.email === email)){
      alert("User Already Registered!")
    }
    else{
      setUsers((prevUser) => [...prevUser, { name, email, pass }]);
    }

    console.log(users);
  };

  return (
    <div>
      <form onSubmit={register}>
        <input type="text" name="name" placeholder="Enter Your Name..." />
        <input type="email" name="email" placeholder="Enter Your Email..." />
        <input
          type="password"
          name="pass"
          placeholder="Enter Your Password..."
        />
        <button>Submit!</button>
      </form>

      {
      
      users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h2>Email: {user.email}</h2>
            <h3>Password: {user.pass}</h3>
          </div>
        );
      })
      
      
      
      }
    </div>
  );
}

export default App;
