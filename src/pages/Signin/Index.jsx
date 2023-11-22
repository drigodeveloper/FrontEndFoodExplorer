import { Container, Form, ButtonText } from "./styles";
import { Link } from "react-router-dom";
import { Logo } from '../../components/Logo/Index'
import { Input } from '../../components/Input/Index'
import { Button } from '../../components/Button/Index'



export function Signin() {
    return(
        <Container>
            <div className="logo">
                <Logo/>
            </div>

            <Form>
                <h1>Faça login</h1>
                
                <label htmlFor="">Email</label>
                <Input 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <label htmlFor="">Senha</label>
                <Input 
                placeholder="No mínimo 6 caracteres"
                />

                <Button title="Entrar"/>

                <ButtonText>
                    <Link to="/register">
                        Criar uma conta
                    </Link>
                </ButtonText>

            </Form>
            
        </Container>
    )
}