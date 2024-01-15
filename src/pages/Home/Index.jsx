import { Container, Banner, Content } from "./styles";
import{ Header } from '../../components/Header'
import{ Sessions } from '../../components/Sessions/Index'
import{ DishBox } from '../../components/DishBox/Index'
import banner from '../../assets/banner.svg'

export function Home() {


    return(
        <Container>
            <Header />

            <Content>
                <Banner>
                    <img src={banner} alt="" />
                    <div className="description">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>

                <Sessions title="Refeições">
                    <DishBox 
                    title="Salada Ravanello"
                    description="Massa fresca com camarões e pesto."
                    price="49,97"
                    />

                </Sessions>

                <Sessions title="Sobremesas">
                    <DishBox 
                    title="Salada Ravanello"
                    description="Massa fresca com camarões e pesto."
                    price="49,97"
                    />

                </Sessions>

                <Sessions title="Bebidas">
                    <DishBox 
                    title="Salada Ravanello"
                    description="Massa fresca com camarões e pesto."
                    price="49,97"
                    />

                </Sessions>

            
            </Content>




          
            
        </Container>
    )
}