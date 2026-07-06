import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-around bg-[#E4FD97] p-3 text-[23px] font-bold text-[#2D3E2C] shadow-[0_0_15px] shadow-[#2D3E2C] ">
      <div className="flex gap-5 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/Products"}>Products</Link>
        <Link to={"/Cart"}>Cart</Link>
      </div>

      <div className="flex gap-5">
        <Link to={"/Register"}>Sign Up</Link>
        <Link to={"/Login"}>Log In</Link>
      </div>
    </div>
  );
}

export default NavBar;
