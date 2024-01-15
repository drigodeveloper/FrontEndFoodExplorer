import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdiminRoutes } from "./adimin.routes";

export function Routes() {
    const { user } = useAuth();

    function AccessRoutes() {
        switch(user.role) {
            case USER_ROLE.ADMIN: 
            return <AdiminRoutes />

            case USER_ROLE.CUSTOMER:
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