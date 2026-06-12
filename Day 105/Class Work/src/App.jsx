import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/home'
import Products from './components/Pages/products'
import Cart from './components/Pages/cart'
import LogIn from './components/Pages/login'
import Register from './components/Pages/register'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
