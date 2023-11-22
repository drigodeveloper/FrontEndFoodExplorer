import { Container, Logo, ButtonMenu, RequestsButton, ButtonLogout } from "./styles";
import { Link } from "react-router-dom";
import { Input } from '../Input/Index'
import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'


export function Header() {
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

            <RequestsButton>
                <PiReceipt />
                <p>Pedidos</p>
            </RequestsButton>

            
            
            <ButtonLogout>
                <PiSignOutFill />
            </ButtonLogout>


   </Container>
  )
}

