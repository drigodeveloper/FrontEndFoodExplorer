import { Container } from "./styles";


export function DishBox() {
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