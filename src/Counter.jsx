import { useState } from "react"
import { Route, Routes } from "react-router"

export function Counter({ initialValue, Variable }) {
    const [counter, setCounter] = useState(initialValue)

    function HandleCounterIncrement() {
        setCounter(counter + Variable)
    }

    return (
        <div>
            <p> I have counted <h2>{counter} </h2></p>
            <button onClick={HandleCounterIncrement}>Increment</button>
        </div>

    )
}
