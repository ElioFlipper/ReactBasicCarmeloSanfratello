import { Age } from "./Age"

export function Welcome({ name, eta }) {
    return (
        <div>
            <p>Welcome, <strong>{name}!</strong></p>
            <Age eta={eta} />
            {eta > 18 && <Age eta={eta} />}
            {eta && <Age eta={eta} />}
            {eta>18 && eta<65  && <Age eta = {eta} />}
            {eta>18 && eta<65 && name === "John"  && <Age eta = {eta} />}

        </div>
    )
}
