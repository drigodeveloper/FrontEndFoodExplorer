import { Container, Content, CardRequest, Total, PaymentMobile, ListRequest } from "./styles";

import { RequestHeader } from "../../components/RequestHeader";
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer'
import { PaymentQrCode } from '../../components/PaymentQrCode/Index'

import maskGroup from '../../assets/Mask group-2.png';

export function ShoppingCart() {

    return(
        <Container>
            <RequestHeader />

            <Content>
                <ListRequest>

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

                </ListRequest>

            <div className="buttonMobile">
                <Button title="Avançar" to="/payment"/>
            </div>

            <PaymentMobile>
                <h1>Pagamento</h1>
                <PaymentQrCode/>
            </PaymentMobile>

            </Content>


            <Footer/>



        </Container>
    )
}


                



                        



                    