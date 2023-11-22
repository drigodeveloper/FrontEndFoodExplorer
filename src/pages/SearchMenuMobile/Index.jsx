import { Container, Header, CloseButton } from "./styles";
import { Input } from '../../components/Input/Index'
import { Footer } from '../../components/Footer/Index'
import { IoMdClose } from "react-icons/io";
import { BsSearch } from 'react-icons/bs'


export function SearchMenuMobile() {
    return(
        <Container>
            <Header>
                <CloseButton to="/">
                    <IoMdClose />
                    Menu
                </CloseButton>
            </Header>

            <div className="search">
                <Input 
                icon={BsSearch}
                placeholder="Busque por pratos ou ingredientes"
                />
            </div>

            <button>
                Sair
            </button>

            <Footer />




        </Container>
    )
}