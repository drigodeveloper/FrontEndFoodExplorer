import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { PERMISSION } from "../utils/permission"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdiminRoutes } from "./adimin.routes";

export function Routes() {
    const { user } = useAuth();

    function AccessRoutes() {
        switch(user.is_admin) {
            case PERMISSION.ADMIN: 
            return <AdiminRoutes />

            case PERMISSION.USER:
            return <AppRoutes />

            default: 
            return <AppRoutes />
      
        }
    }
    return(
        <BrowserRouter>
            
            {user ? <AccessRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
            
    )
}