import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../Pages/Index";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <IndexPage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp