import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
   display: flex;
   flex-direction: column;

   > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        margin: 3.5rem 2.1rem 1.6rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        > h1 {
        margin: 3.5rem 7.6rem 2.1rem;

        }
    }

`;

export const Content = styled.div`
    padding:  3.5rem 2.1rem;

    

    @media (min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto;
        padding:  3.5rem 7.6rem;
    }


`;

export const CardRequest = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 1rem;


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

