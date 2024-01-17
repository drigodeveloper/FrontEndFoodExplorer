import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
   
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
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


export const Banner = styled.div`
    width: 100%;
    height: 7.5rem;
    display: flex;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;

    >img {
        display: flex;
        width: 11rem;
        height: 9.3rem;
        margin-top: -1.4rem;
        
    }
    

>.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1 {
     font-family: 'Poppins', sans-serif;
     font-size: 1.1rem;
     font-style: normal;
     font-weight: 600;
    }
    
    > p{
    font-family: 'Poppins', sans-serif;
    font-size: .7rem;
    font-style: normal;
    font-weight: 400;
    }

}

@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    height: 16.2rem;
    margin-top: 10.2rem;
    >img {
        display: flex;
        width: 39.5rem;
        height: 25.3rem;
        margin-top: -9rem;
        
    }

    >.description {
    
    > h1 {
     font-size: 2.5rem;
    }
    
    > p{
    font-size: 1rem;
    }

}
    
    

}
   
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        padding: 1rem 7.7rem;

    }
`;

export const Logo = styled(Link)`
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
        color: ${({theme}) => theme.COLORS.WHITE};
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

export const LogoAdmin = styled(Link)`
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
            color: ${({theme}) => theme.COLORS.WHITE};
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




