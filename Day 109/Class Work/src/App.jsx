import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Profile from './Components/profile'
import Home from './Components/Home'

function App() {

  return (
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/LogIn' element={<LogIn />} />
      <Route path='/profile' element={<Profile />} />
   </Routes> 
     
  )
}

export default App
