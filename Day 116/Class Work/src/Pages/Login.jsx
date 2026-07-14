import { GetLocal, SetLocal } from "../utils/Localstorage";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const existingUsers = GetLocal("Users") || []

    const user = {};

    for (let [key, value] of formData.entries()) {
      user[key] = value;
    }

 
    const exists = existingUsers.find(us => us.email === user.email);

 
    
    if (exists && exists.pass === user.pass) {
      SetLocal("CurrentUser", exists);
      alert("Logged In");
    } 
    else {
      alert("User Does Not Exist Or The Passwords Do Not Match");
    }
  };

  return (
    <form action="" onSubmit={handleLogin}>
      <input type="email" name="email" />
      <input type="password" name="Pass" />
      <button>Submit!</button>
    </form>
  );
};

export default Login;
