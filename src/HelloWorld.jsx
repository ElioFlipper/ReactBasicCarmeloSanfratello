export function App() {
    return (
        <div>
            <Hello />
        </div>
    )
}

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
