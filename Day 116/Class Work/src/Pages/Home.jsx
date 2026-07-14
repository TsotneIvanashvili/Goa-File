import { useSearchParams } from "react-router-dom"
import Navbar from "../Components/Navigation"
import { useState } from "react"
import { GetLocal } from "../utils/Localstorage"

const Home = () => {

    const [posts, setPosts] = useState([])
    
    const CreatePost = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const post = {}

        for(let[key,value] of formData.entries()){
            post[key] = value
        }


        if(GetLocal("CurrentUser")) {
            setPosts([...posts, post])
        }
        else{
            alert("Log In To Post!")
        }
    }




    return(
        <div>
            <h1>Post Something!</h1>

            <form action="" onSubmit={CreatePost}>
                <input type="text" name="description" />
                <button>Submit!</button>
            </form>


            <div>
                {
                    posts.length > 0 ? posts.map( post => {
                        return(
                            <div>
                                <h1>{GetLocal("CurrentUser").Name} Posted: </h1>
                                <h3>{post.description}</h3>
                            </div>
                        )
                    })

                    :

                    <h1>No Posts Yet!</h1>
                }
            </div>
        </div>
    )



}


export default Home