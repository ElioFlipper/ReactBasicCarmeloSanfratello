
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App() {
    return (
        <div>
            <Welcome name = "John" eta = {75}/>
            <Counter initialValue={0} Variable={2} />
        </div>
    )
}

// Make it so that the event handler is received as 
// a prop by the AlertClock component, instead of being implemented within the component itself.

