import { BrowserRouter, Route } from "react-router-dom"
import { App } from "./App"

export function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>)
        
}