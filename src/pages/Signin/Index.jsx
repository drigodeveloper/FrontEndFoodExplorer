import { useState } from "react";
import { Container, Form, ButtonText } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Logo } from '../../components/Logo/Index'
import { Input } from '../../components/Input/Index'
import { Button } from '../../components/Button/Index'



export function Signin() {

    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const { signin } = useAuth();

    function handleSignIn() {
        signin({ email, password })
    }
    

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
                onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="">Senha</label>
                <Input 
                type="password"
                placeholder="No mínimo 6 caracteres"
                onChange={event => setPassword(event.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <ButtonText>
                    <Link to="/register">
                        Criar uma conta
                    </Link>
                </ButtonText>

            </Form>
            
        </Container>
    )
}