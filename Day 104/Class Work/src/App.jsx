import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home.jsx'
import Signup from "./pages/signup.jsx"
import Login from './pages/login.jsx'

// 1) შექმენით React ის პროექტი, სადაც გექნებათ 3 გვერდი, home, login, signup. 
// როდესაც მომხმარებელი რეგისტრაციას გაივლის, შეინახეთ localStorageში ამ მომხმარებლების მონაცემები. 
// რეგისტრაციის შემდეგ როცა signup ღილაკს დააწვებით ავტომატურად უნდა გადაგაგდოთ login გვერდზე(გამოიყენეთ useNavigate), 
// login ზე როცა გაივლით შემოწმებას უნდა გადავიდეს ავტომატურად  home page ზე.

function App() {


  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
      

  )

}


export default App