
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
    return(
<Routes> 
    <Route path="/" element={<Welcome name="Eliuccio"/>} />
</Routes>
    )
}
//Se non passo alcun name al component "Welcome", non verrà visualizzato nulla