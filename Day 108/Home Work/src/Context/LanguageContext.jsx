import { useState } from "react";
import { createContext } from "react";


export const languageContext = createContext()



const LanContext = ({children}) => {

    const [hello, setHello] = useState("") 


    const filter = (value) => {
        if(value === "eng") {
            setHello("Hello")
        }
        else if(value === "span"){
            setHello("Ola")
        }
        else{
            setHello("Gracias")
        }
    }



    return(
        <languageContext.Provider value={{filter, hello}}>
            {children}
        </languageContext.Provider>
    )


}


export default LanContext