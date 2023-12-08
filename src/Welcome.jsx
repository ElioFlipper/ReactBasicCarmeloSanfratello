import { Age } from "./Age"

export function Welcome({ name, eta }) {
    return (
        <div>
            <p>Welcome, <strong>{name}!</strong></p>
            <Age eta={eta} />
        </div>
    )
}

//Passa al componente Age la prop età che Welcome riceve dal componente App