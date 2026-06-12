import { useEffect, useState } from "react";
import { SetLocal } from "../../utils/localhost";

const Register = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    SetLocal("Users", users);
  }, [users]);

  const register = (e) => {
    e.preventDefault();

    const exists = users.some((user) => user.email === e.target.email.value);

    if (exists) {
      alert("Usear Already Exists!");
    } else if (e.target.pass.value !== e.target.confPass.value) {
      alert("Passwords Do Not Match!");
    } else {
      setUsers([
        ...users,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          pass: e.target.pass.value,
          confPass: e.target.confPass.value,
        },
      ]);
    }
  };

  console.log(users);

  return (
    <main className="flex flex-col justify-center gap-20 items-center h-screen">
        <h1 className="text-6xl">Register Your Account!</h1>
      <form className="flex gap-5 flex-col w-100" onSubmit={register}>
        <input className="border-2 rounded-2xl p-4" type="text" name="name" required placeholder="Enter Your Name.."/>
        <input className="border-2 rounded-2xl p-4" type="email" name="email" required       placeholder="Enter Your Email..."/>
        <input className="border-2 rounded-2xl p-4" type="password" name="pass" required     placeholder="Enter Your Password..."/>
        <input className="border-2 rounded-2xl p-4" type="password" name="confPass" required placeholder="Confirm Password... "/>
        <button>Submit!</button>
      </form>
    </main>
  );
};

export default Register;
