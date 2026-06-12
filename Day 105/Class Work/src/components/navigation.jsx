import { Link } from "react-router-dom"



const Header = () => {




    return (
        <div className="flex justify-around">
            {
                
            }
            <Link className="text-[25px]" to={"/"}>Home</Link>
            <Link className="text-[25px]" to={"/products"}>Products</Link>
            <Link className="text-[25px]" to={"/cart"}>Cart</Link>
            <Link className="text-[25px]" to={"/login"}>Log In</Link>
            <Link className="text-[25px]" to={"/register"}>Register</Link>

        </div>
    )


}


export default Header