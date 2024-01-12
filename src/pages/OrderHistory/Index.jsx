import { Container, Content, CardHistory } from "./styles";
import { Header } from '../../components/Header'

import { GrStatusGoodSmall } from "react-icons/gr";

export function OrderHistory() {
    return(
        <Container>
            <Header/>

            <Content>
                <h1>Histórico de pedidos</h1>

                <CardHistory>
                    <div className="status">
                        <p>0001</p>
                        <p><GrStatusGoodSmall /> Pendente</p>
                        <p>20/05 às 18h00</p>

                    </div>

                    <div className="itens">
                        <ul>
                            <li>1 x Salada Radish,</li>
                            <li>1 x Torradas de Parma,</li>
                            <li>1 x Torradas de Parma</li>
                        </ul>

                    </div>


                </CardHistory>
            </Content>
            
        </Container>
    )
}