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
    
    .logoName {
        display: flex;
        flex-direction: column;

        >h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 1.3rem;
            font-style: normal;
            font-weight: 700;
        }

        >p {
            align-self: flex-end;
            font-family: 'Roboto', sans-serif;
            font-size: 0.7rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_BLUE};

        }
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

export const NewDishButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.RED};;
    border: none;
    border-radius: 0.31rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    width: 13.5rem;
    height: 3rem;

    
    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        
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
