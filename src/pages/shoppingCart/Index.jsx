import { Container, Content, CardRequest, Total } from "./styles";

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer'

import maskGroup from '../../assets/Mask group-2.png';

export function ShoppingCart() {

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


            <Total>
                <h1>Total:</h1>
                <p>R$ 103,88</p>
            </Total>

            <Button title="Avançar"/>

            </Content>

            <Footer/>



        </Container>
    )
}


                



                        



                    