import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import maskGroup from '../../assets/Mask group-2.png'

export function ShoppingCart() {

    return(
        <Container>
            <Header />

            <Content>
            <h1>Meu pedido</h1>
            
            <ul>
                <li><img src={maskGroup} alt="" />1 x  Salada Radish <p>R$ 29,99</p> <a href="">Excluir</a></li>
                <li><img src={maskGroup} alt="" />1 x  Salada Radish <p>R$ 29,99</p> <a href="">Excluir</a></li>
                <li><img src={maskGroup} alt="" />1 x  Salada Radish <p>R$ 29,99</p> <a href="">Excluir</a></li>
                
            </ul>

            </Content>


        </Container>
    )
}


                



                        



                    