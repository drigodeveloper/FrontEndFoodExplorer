import { Routes, Route } from "react-router-dom";

import { Details } from '../pages/Details/Index'
import { EditDish } from '../pages/EditDish/Index'
import { Home } from '../pages/Home/Index'
import { NewDish } from '../pages/NewDish/Index'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/editDish" element={<EditDish/>}/>
            <Route path="/newDish" element={<NewDish/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}