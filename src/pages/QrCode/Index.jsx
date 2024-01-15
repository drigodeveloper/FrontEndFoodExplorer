import { Container, Content } from "./styles";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { PaymentQrCode } from '../../components/PaymentQrCode/Index'


export function QrCode() {

  return(
    <Container>
      <Header />

      <Content>
        <h1>Pagamento</h1>

       
        
            <PaymentQrCode/>
        



      </Content>

      <Footer />
    </Container>
  )
}
