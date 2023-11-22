import { Container, Form, ButtonText } from "./styles";
import { Link } from "react-router-dom";
import { Logo } from '../../components/Logo/Index'
import { Input } from '../../components/Input/Index'
import { Button } from '../../components/Button/Index'



export function Signup() {
    return(
        <Container>
            <div className="logo">
                <Logo/>
            </div>

            <Form>
                <h1>Crie sua conta</h1>
                
                <label htmlFor="">Seu nome</label>
                <Input 
                placeholder="Exemplo: Maria da Silva"
                />

                <label htmlFor="">Email</label>
                <Input 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <label htmlFor="">Senha</label>
                <Input 
                placeholder="No mínimo 6 caracteres"
                />

                <Button title="Criar conta"/>

                <ButtonText>
                    <Link to="/">
                        Já tenho uma conta
                    </Link>
                </ButtonText>

            </Form>
            
        </Container>
    )
}