import { Routes, Route } from "react-router-dom";

import { Details } from '../pages/Details/Index'
import { Home } from '../pages/Home/Index'
import { SearchMenuMobile } from '../pages/SearchMenuMobile/Index'
import { ShoppingCart } from '../pages/shoppingCart/Index'
import { PaymentQrCode } from '../pages/PaymentQrCode/Index'
import { OrderHistory } from '../pages/OrderHistory/Index'
import { Favorites } from '../pages/Favorites/Index'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/search" element={<SearchMenuMobile/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/payment" element={<PaymentQrCode/>}/>
            <Route path="/history" element={<OrderHistory/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            
        </Routes>
    )
}