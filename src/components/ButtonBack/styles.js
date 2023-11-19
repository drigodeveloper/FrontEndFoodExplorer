import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.button`
    display: flex;
    width: fit-content;
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};

    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;

    margin: 1rem 2rem;
    font-size: 1rem;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        margin: 2.5rem 7.6rem; 
        font-weight: 700;





    }
`;