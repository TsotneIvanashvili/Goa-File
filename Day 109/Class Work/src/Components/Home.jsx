import { Link } from "react-router-dom"
import FetchData from "../utils/fetch"
import { useEffect, useState } from "react"

const Home = () => {

    
    
    return(
        <div>
            <div>
                <Link to={"/signUp"}>Register</Link>
            <Link to={"/login"}>Log In</Link>
            <Link to={"/profile"}>Profile</Link>
            </div>

            {/* <div>
                {
                    data.map( item => {
                        return (
                            <h1>{item.title}</h1>
                        )
                    })
                }
            </div> */}
        </div>
    )
}


export default Home