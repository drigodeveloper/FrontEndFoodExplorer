import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

import { Link } from "react-router-dom";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;

`;

export const Content = styled.div`
    
    padding: 3.5rem 2.1rem;
    

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 2.1rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        display: flex;
        width: 100%;
        justify-content: space-between;

        padding: 2rem 7.6rem;
        gap: 12.7rem;

        
        >.buttonMobile {
                display: none;
            }
        }


`;

export const CardRequest = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0 1rem;


    >.descriptionDish h1 { 
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
    }
    >.descriptionDish a {
        font-family: 'Roboto', sans-serif;
        font-size: .7rem;
        color: ${({theme}) => theme.COLORS.RED };
    }
    > .img img {
        width: 6.2rem;
        height: 6.2rem;
        margin-right: 1rem;
    }


 
`;

export const Total = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2.9rem;

    > h1, p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
    }
`;

export const PaymentMobile = styled.div`

    width: 100%;
    > h1 {
        margin-bottom: 2.1rem;
    }
    
    @media(max-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        display: none;
    }
`;

export const ListRequest = styled.div`
   width: 100%;
    
`;



