import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";
import { Link } from "react-router-dom";



export const Container = styled.div`
display: flex;
width: 100%;
height: 7.1rem;

align-items: center;
justify-content: space-evenly;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

> .inputSearch {
    display: none;
}

@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    > .buttonMenu {
        display: none;
    }

    > .inputSearch {
        display: flex;
        width: 36.31rem;
    }



}


    
`;

export const Logo = styled.div`
    display: flex;

    >svg {
        color: ${({theme}) => theme.COLORS.BLUE};
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .5rem;

    }

    >h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 700;
    }
`;
export const ButtonMenu = styled(Link)`
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    width: 1.5rem;
    height: 1.5rem;

    > svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    
        display: none;
    
}

`;

export const RequestsButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.WHITE};
    width: 1.5rem;
    height: 1.5rem;

    > p {
        display: none;
    }

   

    >svg {
        width: 2rem;
        height: 2rem;
    }

    
    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        
        background-color: ${({theme}) => theme.COLORS.RED};
        width: 13.5rem;
        height: 3rem;



    > p{
        display: flex;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
    }

       
    } 
    

`;

export const ButtonLogout = styled.button`
    display: none;
    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
 
        display: flex;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 2rem;
        height: 2rem;

        

    > svg {
        width: 2rem;
        height: 2rem;
}
    }
`;
