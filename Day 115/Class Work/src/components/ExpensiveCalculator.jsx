import { useMemo, useState } from "react";

const ExpensiveCalculator = () => {

    const [number, setNumber] = useState(0)
    const [text, setText] = useState("")
    
    const calculate = (num) => {
        console.log("Calculated");
        for(let i = 0; i < 100000000; i++){}
        
        return num ** 2
        
    }
    const square = useMemo(() => {
        calculate(number)
    }, [number])

    return(

        <div>
            <input type="number" onChange={(e) => setNumber(e.target.value)}/>
            <h1>{number}</h1>
        

            <input type="text" onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>
        </div>

    )
}

export default ExpensiveCalculator