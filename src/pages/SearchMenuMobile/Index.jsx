import { Container, Header, CloseButton } from "./styles";

import { Link } from "react-router-dom";

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

            <nav>
            <Link to="/history">Histórico de pedidos</Link>
            <Link >Meus favoritos</Link>
            <Link >Sair</Link>

            </nav>


            

            <Footer />




        </Container>
    )
}