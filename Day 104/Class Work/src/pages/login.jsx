import { Link } from "react-router-dom"

const login = () => {

    const users = JSON.parse(localStorage.getItem("Users")) || []

    const handleLogin = (e) => {
        e.preventDefault()

        


        const exists = users.find( user => user.email === e.target.email.value && user.pass === e.target.pass.value)

        console.log(exists);
        

        if(exists){
            localStorage.setItem("CurrentUser", JSON.stringify(exists))
            
            
        }
        else{
            alert("Email or Passwords Do Not Match")
        }


        navigate("/")


    }


    return(

        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/signup"}>SignUp</Link>

            <form onSubmit={handleLogin}>
            <input type="email" name="email"/>
            <input type="password" name="pass"/>
            <button>submit!</button>
        </form>
        </main>

        
    )



}


export default login