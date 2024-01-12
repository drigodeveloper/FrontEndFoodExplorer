import { Container, Logo, ButtonMenu, NewDishButton, ButtonLogout } from "./styles";
import { Link } from "react-router-dom";
import { Input } from '../Input/Index'
import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiSignOutFill } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";



export function AdiminHeader() {

    const { signOut } = useAuth();

  return (
   <Container>

                <ButtonMenu to="/search">
                    <FiMenu />
                </ButtonMenu>


            <Logo>
                <BsFillHexagonFill />
                <div className="logoName">
                    <h1>Food explorer</h1>
                    <p>admin</p>
                </div>

            </Logo>


            <div className="inputSearch">
            <Input 
            icon={BsSearch}
            placeholder="Busque por pratos ou ingredientes"
            />
            </div>

            <NewDishButton to="/newDish">
                Novo prato
            </NewDishButton>

            
            
            <ButtonLogout onClick={signOut}>
                <PiSignOutFill />
            </ButtonLogout>


   </Container>
  )
}

