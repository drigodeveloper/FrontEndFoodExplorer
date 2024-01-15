import { Container, Logo, ButtonMenu, RequestsButton, ButtonLogout, NavBar } from "./styles";

import { Input } from '../Input/Index'

import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";




export function RequestHeader() {

    const { signOut } = useAuth();

  return (
   <Container>

                <ButtonMenu to="/search">
                    <FiMenu />
                </ButtonMenu>


            <Logo to="/">
                <BsFillHexagonFill />
                <h1>Food explorer</h1>
            </Logo>


            <div className="inputSearch">
            <Input 
            icon={BsSearch}
            placeholder="Busque por pratos ou ingredientes"
            />
            </div>

            <NavBar>
                <Link to="/favorites">Meus favoritos</Link>
                <Link to="/history">Histórico de pedidos</Link>
            </NavBar>

            <RequestsButton to="/cart">
                <PiReceipt />
                <p>Pedidos</p>
            </RequestsButton>

            
            
            <ButtonLogout onClick={signOut}>
                <PiSignOutFill />
            </ButtonLogout>


   </Container>
  )
}

