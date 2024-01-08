
import { Route, Routes } from "react-router";
import { Counter } from "./Counter";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Counter initialValue={0} Variable={75}/>} />
        </Routes>
    )
}


