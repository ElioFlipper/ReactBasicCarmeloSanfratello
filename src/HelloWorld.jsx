export function App() {
    return (
        <div>
            <Hello />
            <Message />
        </div>
    )
}
//Se richiamo due volte la funzione <Hello />, stampo due volte l'H2 "Hello, world!"
//Allo stesso modo, se richiamo <Message /> in entrambe le funzioni, verrà renderizzato molteplici volte

function Message() {
    return <p>What a beautiful day!</p>
}

export function Hello() {
    return (
        <div>
            <h2>Hello, world!</h2>
            <Message />
        </div>)
}
