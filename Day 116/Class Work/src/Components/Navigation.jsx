import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/signup"}>Register</Link>
            <Link to={"/login"}>Log In</Link>
            <Link to={"/profile"}>Profile</Link>
        </div>
    )

}

export default Navbar