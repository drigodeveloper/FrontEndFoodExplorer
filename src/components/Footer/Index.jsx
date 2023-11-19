import { Container } from "./styles";
import { BsFillHexagonFill } from 'react-icons/bs'
import { AiOutlineCopyright } from 'react-icons/ai'


export function Footer() {
    return(
        <Container>
                <span> <BsFillHexagonFill /> food explorer</span>
                 <p> <AiOutlineCopyright /> 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}