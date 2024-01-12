import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
   display: flex;
   flex-direction: column;

`;

export const Content = styled.div`
    padding:  3.5rem 2.1rem;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 2.1rem;
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

