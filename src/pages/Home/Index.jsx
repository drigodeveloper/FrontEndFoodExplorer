import { api } from "../../services/api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Banner, Content, Logo, ButtonMenu, RequestsButton, ButtonLogout, LogoAdmin, NewDishButton, Header } from "./styles";

import{ Sessions } from '../../components/Sessions/Index'
import{ DishBox } from '../../components/DishBox/Index'
import banner from '../../assets/banner.svg'

import { Input } from '../../components/Input/Index'

import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles'

export function Home() {

    const { signOut, user } = useAuth();
    const params = useParams();

    const [data, setData] = useState(null)
    const [ search, setSearch ] = useState("");
    const [dishes, setDishes] = useState([]);



    useEffect(() => {
        async function fetchDishes() {
          try {
            const response = await api.get("/menu");
            setDishes(Array.isArray(response.data) ? response.data : []);
          } catch (error) {
            console.log(error);
          }
        }
      
        fetchDishes();
      }, []);
    return(
        <Container>

            <Header>

                <ButtonMenu to="/search">
                        <FiMenu />
                    </ButtonMenu>


                { 
                
                user.role === USER_ROLE.CUSTOMER ? <Logo to="/">
                    <BsFillHexagonFill />
                    <h1>Food explorer</h1>
                </Logo>
                :
                <LogoAdmin to="/">
                    <BsFillHexagonFill />
                    <div className="logoName">
                        <h1>Food explorer</h1>
                        <p>admin</p>
                    </div>

                </LogoAdmin>
                
                }

                <div className="inputSearch">
                <Input 
                icon={BsSearch}
                placeholder="Busque por pratos ou ingredientes"
                onChange={e => setSearch(e.target.value)}
                />
                </div>


                {
                user.role === USER_ROLE.CUSTOMER ?
                    <RequestsButton to="/cart">
                    <PiReceipt />
                    <p>Pedidos</p>
                </RequestsButton>
                    :
                <NewDishButton to="/newDish">
                    Novo prato
                </NewDishButton>
                }
                
                
                <ButtonLogout onClick={signOut}>
                    <PiSignOutFill />
                </ButtonLogout>

            </Header>


            

            <Content>
                <Banner>
                    <img src={banner} alt="" />
                    <div className="description">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>

                 <Sessions title="Refeições">
                    {dishes.map((dish) => (
                    <DishBox
                        key={dish.id}
                        title={dish.title}
                        description={dish.description}
                        price={dish.price}
                    />
                    ))}
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