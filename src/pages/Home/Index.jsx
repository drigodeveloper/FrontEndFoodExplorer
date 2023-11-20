import { Container, Banner, Content } from "./styles";
import{ Header } from '../../components/Header'
import banner from '../../assets/banner.svg'

export function Home() {
    return(
        <Container>
            <Header />

            <Content>

            </Content>

            <Banner>
                <img src={banner} alt="" />
                <div className="description">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>

            </Banner>


          
            
        </Container>
    )
}