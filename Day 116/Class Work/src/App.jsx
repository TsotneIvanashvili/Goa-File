import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";
import Navbar from "./Components/Navigation.jsx";

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

// შექმენით facebook clone ვებსაიტი მარტივად.

// საიტს უნდა ჰქონდეს რეგისტრაცია/ავტორიზაციის გვერდები,
// უნდა ჰქონდეს პროფილის გვერდი და ასევე უნდა ჰქონდეს პოსტების გვერდი,
// ამ  გვერდზე უნდა იყოს პატარა ფორმა და უნდა შეეძლოს მომხმარებელს პოსტების დამატება.
//  უნდა გამოიყენოთ აუცილებლად რაც გავიარეთ ყველაფერი, protectedRoute, memoization და ა.შ.
