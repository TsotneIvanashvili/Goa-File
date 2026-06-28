import { useNavigate } from "react-router-dom";
import { GetLocal } from "../utils/LocalStorage";

const Profile = () => {
  const currentUser = GetLocal("CurrentUser");
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem("CurrentUser")
    navigate("/")
  }

  return (
    <div>
      <h1>{currentUser ? currentUser.name : "Guest"}</h1>
      <h3>{currentUser ? currentUser.email : "guest@gmail.com"}</h3>
      {
        currentUser ? <button onClick={logOut}>Log Out</button> : <p></p> 
      }
    </div>
  );
};


export default Profile