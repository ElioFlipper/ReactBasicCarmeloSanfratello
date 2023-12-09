
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
    return (
        <div>
            <MouseClicker />
        </div>
    )
}

// Make it so that the event handler is received as
// a prop by the AlertClock component, instead of being implemented within the component itself.

