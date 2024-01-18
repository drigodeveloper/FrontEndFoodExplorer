import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
    width: 100%;
    margin: 3.9rem 1.1rem;
    display: flex;
    
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        h1 {
            font-size: 2rem;
        }
    }
        
        
    
   
`;

