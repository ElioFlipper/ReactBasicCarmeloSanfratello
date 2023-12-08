import { Age } from "./Age"

export function Welcome({ name, eta }) {
    return (
        <div>
            <p>Welcome, <strong>{name}!</strong></p>
            {eta>18 ? <Age eta={eta}/> : <p>You are very young!</p>}

        </div>
    )
}
