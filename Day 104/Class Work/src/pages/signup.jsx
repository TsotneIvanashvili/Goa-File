import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";




const signUp = () => {


    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("Users")) || []);

    useEffect( () => {
        localStorage.setItem("Users", JSON.stringify(users))
    }, [users])


    let navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()


        const exists = users.some(user => user.email === e.target.email.value)


        console.log(exists);
        


        if(exists){
            alert("User Already Exists!")
        }
        else{
            setUsers([...users, { fName: e.target.fName.value, email: e.target.email.value, pass: e.target.pass.value}])
            navigate("/login")
            
        }



        
    
        

       
    
    }

    


    return(

        <main>

            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Log In</Link>

            <form onSubmit={handleSignup}>
            <input type="text" name="fName"/>
            <input type="email" name="email"/>
            <input type="password" name="pass"/>
            <button>Submit!</button>
        </form>

        </main>
        
    )





}


export default signUp