import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

    export function Counter() {
        const [counter, setCounter ] = useState(0)

        function HandleCounterIncrement() {
            setCounter(counter + 1)
        }
    
    return (
        <div>
<CounterDisplay />
        </div>
    )
}

//Ogni volta che la funziona "setter" viene chiamata per incrementare il counter, la funzione viene nuovamente eseguita da React.
//Ogni volta che viene premuto il button, React "ricorda" il valore precedentemente renderizzato e va ad aggiornare quello,
//non ricominciando ogni volta da 0.