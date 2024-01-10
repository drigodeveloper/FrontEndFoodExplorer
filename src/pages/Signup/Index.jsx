import { Container, Form, ButtonText } from "./styles";
import { api } from "../../services/api"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from '../../components/Logo/Index'
import { Input } from '../../components/Input/Index'
import { Button } from '../../components/Button/Index'



export function Signup() {

    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            alert("Preencha todos os campos")
            return
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar!")
            }
        })


    }

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
                onChange={event => setName(event.target.value)}
                />

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

                <Button title="Criar conta" onClick={handleSignUp}/>

                <ButtonText>
                    <Link to="/">
                        Já tenho uma conta
                    </Link>
                </ButtonText>

            </Form>
            
        </Container>
    )
}