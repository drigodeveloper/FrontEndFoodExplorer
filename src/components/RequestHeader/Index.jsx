import { Container, Logo, ButtonMenu, RequestsButton, ButtonLogout, NavBar } from "./styles";
import { Input } from '../Input/Index'
import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'
import { useAuth } from "../../hooks/auth";



export function Header() {

    const { signOut } = useAuth();

  return (
   <Container>

                <ButtonMenu to="/search">
                    <FiMenu />
                </ButtonMenu>


            <Logo>
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
                <a href="">Meus favoritos</a>
                <a href="">Histórico de pedidos</a>
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

