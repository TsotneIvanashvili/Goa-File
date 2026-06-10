import { Link } from "react-router-dom"

const home = () => {

    return(
        <main>
            <Link to="/" >Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
        </main>
    )
    
}

export default home