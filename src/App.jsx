
import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

export function App() {
    return(
        <div>
            <Welcome name = "John" eta = {75}/>
            <AlertClock />
        </div>
    )
}

// Make it so that the event handler is received as 
// a prop by the AlertClock component, instead of being implemented within the component itself.

