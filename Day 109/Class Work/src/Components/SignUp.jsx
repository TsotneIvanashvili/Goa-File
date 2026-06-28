import { useContext } from "react";
import { RegContext } from "../Context/RegContext.jsx";

const SignUp = () => {
  const { handleRegister } = useContext(RegContext);

  return (
    <form onSubmit={handleRegister}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="password" name="pass" required />
      <button>Submit!</button>
    </form>
  );
};

export default SignUp;
