import { Container, Banner, Content } from "./styles";
import{ AdiminHeader } from '../../components/AdiminHeader/Index'
import{ AdminSessions } from '../../components/AdminSessions/Index'
import{ DishBox } from '../../components/DishBox/Index'
import banner from '../../assets/banner.svg'

export function AdiminHome() {


    return(
        <Container>
            <AdiminHeader />

            <Content>
                <Banner>
                    <img src={banner} alt="" />
                    <div className="description">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>
                <AdminSessions title="Refeições">
                    <DishBox 
                    title="Salada Ravanello"
                    description="Massa fresca com camarões e pesto."
                    price="49,97"
                    />

                </AdminSessions>

                <AdminSessions title="Sobremesas">
                    <DishBox 
                    title="Salada Ravanello"
                    description="Massa fresca com camarões e pesto."
                    price="49,97"
                    />

                </AdminSessions>

                <AdminSessions title="Bebidas">
                    <DishBox 
                    title="Salada Ravanello"
                    description="Massa fresca com camarões e pesto."
                    price="49,97"
                    />

                </AdminSessions>

            
            </Content>




          
            
        </Container>
    )
}