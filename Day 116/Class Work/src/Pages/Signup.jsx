import { useEffect, useState } from "react"
import { GetLocal, SetLocal } from "../utils/Localstorage"

const SignUp = () => {
    const [users, setUsers] = useState( GetLocal("Users") || [])

    useEffect(() => {
        SetLocal("Users", users)
    }, [users])


    const register = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const user = {}        

        for(let [key, value] of formData.entries()){
            user[key] = value
            
        }

        const exists = users.some(i => i.email === user.email)
        
        if(exists){
            alert("User Exists")
            return
        }

        if(user.Pass !== user.ConfPass){
            alert("Passwords Don't Match")
        }
        setUsers([...users, user])
        

        console.log(users);
        

    }


    return(
        <form onSubmit={register}>
            <input type="text" name="Name" required/>
            <input type="email" name="email" required/>
            <input type="password" name="Pass" required/>
            <input type="password" name="ConfPass" required/>
            <button>Submit!</button>
        </form>
    )

}


export default SignUp