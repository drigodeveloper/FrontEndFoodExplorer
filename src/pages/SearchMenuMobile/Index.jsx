import { Container, Header } from "./styles";
import { Input } from '../../components/Input/Index'
import { Footer } from '../../components/Footer/Index'
import { IoMdClose } from "react-icons/io";
import { BsSearch } from 'react-icons/bs'


export function SearchMenuMobile() {
    return(
        <Container>
            <Header>
                <button>
                    <IoMdClose />
                    Menu
                </button>
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