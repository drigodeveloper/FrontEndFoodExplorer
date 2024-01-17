import { api } from "../../services/api"
import { useEffect, useState } from "react";

import { Container, Logo, ButtonMenu, RequestsButton, ButtonLogout, LogoAdmin, NewDishButton } from "./styles";

import { Input } from '../Input/Index'

import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles'



export function Header() {

    const { signOut, user } = useAuth();

    const [ search, setSearch ] = useState("");
    const [dish, setDish] = useState([]);

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/menu?title${search}`);
            setDish(response.data)
        }

        fetchDishes()
    
    }, [search])

  return (
   <Container>

                <ButtonMenu to="/search">
                    <FiMenu />
                </ButtonMenu>


            { 
            
            user.role === USER_ROLE.CUSTOMER ? <Logo to="/">
                <BsFillHexagonFill />
                <h1>Food explorer</h1>
            </Logo>
            :
            <LogoAdmin to="/">
                <BsFillHexagonFill />
                <div className="logoName">
                    <h1>Food explorer</h1>
                    <p>admin</p>
                </div>

            </LogoAdmin>
            
            }

            <div className="inputSearch">
            <Input 
            icon={BsSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => setSearch(e.target.value)}
            />
            </div>


            {
            user.role === USER_ROLE.CUSTOMER ?
                <RequestsButton to="/cart">
                <PiReceipt />
                <p>Pedidos</p>
            </RequestsButton>
                :
            <NewDishButton to="/newDish">
                Novo prato
            </NewDishButton>
            }
            
            
            <ButtonLogout onClick={signOut}>
                <PiSignOutFill />
            </ButtonLogout>


   </Container>
  )
}

