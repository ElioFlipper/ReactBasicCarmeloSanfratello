import { useEffect } from "react"
import { useState } from "react"

export function Clock(){

    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        const IntervalID = setInterval(()=>{
            setDate(new Date())
        },1000)
        return () => {
            clearInterval(IntervalID)
        }
    }, [])
    return(
        <div><h2>Current time: {date.toLocaleTimeString()}</h2></div>
    )
}