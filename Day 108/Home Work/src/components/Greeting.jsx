import { useContext } from "react"
import { useState } from "react"
import { languageContext } from "../Context/LanguageContext.jsx"

const Greet = () => {

    const {filter, hello} = useContext(languageContext)



    return(
        <div>
            <button onClick={()  => filter("eng")}>English</button>
            <button onClick={()  => filter("span")}>Spanish</button>
            <button onClick={()  => filter("")}>French</button>

            <h1>{hello}</h1>
        </div>
    )

}


export default Greet