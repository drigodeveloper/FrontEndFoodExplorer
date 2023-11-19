import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"


export function IngredientsItems({isNew, value, onClick, ...rest}) {
    return(
        <Container>
           <input 
            type="text"
            value={value} 
            readOnly={!isNew}
            {...rest}
            />

            <button 
            onClick={onClick}
            type="button"
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}
                        



                    