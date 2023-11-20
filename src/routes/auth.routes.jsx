import { Routes, Route } from "react-router-dom";

import { Signin } from '../pages/Signin/Index'
import { Signup } from '../pages/Signup/Index'


export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/register" element={<Signup/>}/>
        </Routes>
    )
}