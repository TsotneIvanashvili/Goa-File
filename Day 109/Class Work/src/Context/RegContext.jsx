import { createContext, useEffect, useState } from "react";
import { GetLocal, SetLocal } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

export const RegContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(GetLocal("Users") || []);
  const [currentUser, setCurrent] = useState(null);

  useEffect(() => {
    SetLocal("Users", users);
  }, [users]);

  useEffect(() => {
    SetLocal("CurrentUser", currentUser);
  }, [currentUser]);

  const handleRegister = (e) => {
    e.preventDefault();

    if (users.some((user) => user.email === e.target.email.value)) {
      alert("User Already Exists!");
    } 
    else {
      setUsers((prev) => [
        ...prev,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.pass.value,
        },
      ]);
      navigate("/signup");
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    const exists = users.find(
      (user) =>
        user.email === e.target.email.value &&
        user.password === e.target.pass.value,
    );
    if (!exists) {
      alert("Wrong Email Or Password!");
      console.log(exists);
    } else {
      setCurrent(exists);
      navigate("/profile")
    }
  };

  return (
    <RegContext.Provider value={{ handleRegister, users, handleLogIn }}>
      {children}
    </RegContext.Provider>
  );
};

export default AuthProvider;
