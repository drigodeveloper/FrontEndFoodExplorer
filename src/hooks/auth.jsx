import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [ data, setData] = useState({});

    async function signin({ email, password }) {
        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            
            
            localStorage.setItem("@foodexplorer:token", token)
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            
            
            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            setData({ user, token })
            
        }catch(error) {
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Não foi possível entrar!")
            }
        }

    }

    async function signOut() {
        const token = localStorage.removeItem('@rocketnotes:token');
        const user = localStorage.removeItem('@rocketnotes:user');
  
        setData({});
      }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")

        if(token && user) {
            api.defaults.headers.common['authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])


        return(
            <AuthContext.Provider value={{signin, user: data.user, signOut}}>
                {children}
            </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}

export {AuthProvider, useAuth}