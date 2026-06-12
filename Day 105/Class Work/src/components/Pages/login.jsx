import { useNavigate } from "react-router-dom";
import { GetLocal, SetLocal } from "../../utils/localhost";

const LogIn = () => {
  const navigator = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const exists = GetLocal("Users").find(
      (user) =>
        user.email === e.target.email.value &&
        user.pass === e.target.pass.value,
    );

    if (exists) {
      SetLocal("CurrentUser", exists);

      setTimeout(() => {
        navigator("/products");
      }, 1000);

      
    } else {
      alert("Wrong Email Or Password");
    }
  };

  return (
    <main className="flex flex-col gap-20 justify-center items-center h-screen">
        <p className="text-6xl">Log In!</p>
        <form className="flex gap-5 flex-col w-100" onSubmit={login}>
        <input className="border-2 rounded-2xl p-4" type="email" name="email" required       placeholder="Enter Your Email..."/>
        <input className="border-2 rounded-2xl p-4" type="password" name="pass" required     placeholder="Enter Your Password..."/>
        <button>Submit!</button>
      </form>
    </main>
    
  );
};

export default LogIn;
