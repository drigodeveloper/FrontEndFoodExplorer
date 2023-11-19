import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'


export function Counter() {
    return(
        <Container>
            <button>
                <AiOutlineLine/>
            </button>
                <input type="number" />
            <button>
                <AiOutlinePlus/>
            </button>
        </Container>
    )
}
