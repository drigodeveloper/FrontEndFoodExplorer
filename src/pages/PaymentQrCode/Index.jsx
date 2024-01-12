import { Container, Content, PaymentCard } from "./styles";

import { MdPix, MdCreditCard  } from "react-icons/md";

import qrcode from '../../assets/qrcode.svg'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


export function PaymentQrCode() {

    return(
        <Container>
            <Header />

            <Content>
                <h1>Pagamento</h1>

                <PaymentCard>
                    <div className="menuButtons">
                        <button className="buttonPix" > <MdPix /> Pix</button>
                        <button className="buttonCreditCard"> <MdCreditCard /> Cartão</button>
                    </div>

                    <img src={qrcode} alt="" />


                </PaymentCard>

            </Content>

            <Footer />

           
        </Container>
    )
}