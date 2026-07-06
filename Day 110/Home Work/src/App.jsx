import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import LogIn from "./Pages/Login";
import Register from "./Pages/Signup";
import Products from "./Pages/Products";
import NavBar from "./components/Navigation";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
