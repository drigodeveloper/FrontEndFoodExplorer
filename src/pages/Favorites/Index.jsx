import { Container, Content, CardRequest } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';

import maskGroup from '../../assets/Mask group-2.png';

export function Favorites() {

    return(
        <Container>
            <Header />

            <Content>
            <h1>Meu pedido</h1>

            <CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest>
            <CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest>


            

            </Content>

            <Footer/>



        </Container>
    )
}


                



                        



                    