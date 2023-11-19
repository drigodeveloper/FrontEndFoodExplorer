import { Container, Logo } from "./styles";
import { Input } from '../Input/Index'
import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'


export function Header() {
  return (
   <Container>

            <button className="buttonMenu">
                <FiMenu />
            </button>

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

            <button className="requestsButton">
                <PiReceipt />
                <p className="textButton">Pedidos</p>
            </button>

            <button className="buttonLogout">
                <PiSignOutFill />
            </button>

   </Container>
  )
}

