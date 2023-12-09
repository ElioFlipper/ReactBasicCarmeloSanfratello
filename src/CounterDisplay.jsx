export function CounterDisplay(){
    const [counter, setCounter ] = useState(0)

    function HandleCounterIncrement() {
        setCounter(counter + 1)
    }
    return(
        <div>
        <p> I have counted <h2>{counter} </h2></p>
        <button onClick = {HandleCounterIncrement}>Increment</button>
        </div>
    )
}