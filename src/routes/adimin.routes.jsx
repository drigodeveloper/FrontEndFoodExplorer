import { Routes, Route } from "react-router-dom";

import { Details } from '../pages/Details/Index'
import { EditDish } from '../pages/EditDish/Index'
import { AdiminHome } from '../pages/AdiminHome/Index'
import { NewDish } from '../pages/NewDish/Index'
import { SearchMenuMobile } from '../pages/SearchMenuMobile/Index'

export function AdiminRoutes() {
    return(
        <Routes>
            <Route path="/" element={<AdiminHome/>}/>
            <Route path="/editDish" element={<EditDish/>}/>
            <Route path="/newDish" element={<NewDish/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/search" element={<SearchMenuMobile/>}/>
        </Routes>
    )
}