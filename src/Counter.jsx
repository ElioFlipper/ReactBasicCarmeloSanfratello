import { useEffect, useState } from "react"

    export function Counter({initialValue, Variable}) {
        const [counter, setCounter ] = useState(initialValue)

        useEffect(()=>{
            console.log(`The value of the counter is ${counter}`)
        })

        function HandleCounterIncrement() {
            setCounter(counter + Variable)
        }
    
    return (
        <div>
           <p> I have counted <h2>{counter} </h2></p>
            <button onClick = {HandleCounterIncrement}>Increment</button>
        </div>
    ) }