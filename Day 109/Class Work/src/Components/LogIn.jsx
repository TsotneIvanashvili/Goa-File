import { useContext } from "react"
import { RegContext } from "../Context/RegContext.jsx"


const LogIn = () => {
    const {handleLogIn} = useContext(RegContext)

   

    return(
        <form onSubmit={handleLogIn}>
            <input type="email" name="email"/>
            <input type="password" name="pass"/>
            <button>Submit!</button>
        </form>
    )

}


export default LogIn