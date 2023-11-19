import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;

    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 3.5rem;
    

    > img {
        align-self: center;
        width: 16rem;
        height: 16rem;
    }

    > .dishDescription { 
        margin-top: 1rem;
        >h1 {
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        >p {
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            margin-bottom: 1.5rem;

        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        display: flex;
        flex-direction: row;
        padding: 2.6rem 7.5rem;
        align-items: center;


        > img {
            margin: 2.6rem 2.6rem 0 0;
            width: 24rem;
            height: 24rem;
        }

        > .dishDescription { 

        >h1 {
            font-size: 2.6rem;
            text-align: left;
        }

        >p {
            text-align: left;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
    }
    }


`;


export const Account = styled.div`
    display: flex;
    width: 100%;
    background: transparent;
    border: none;
    align-items: center;
    justify-content: center;

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        max-width: 18.2rem;

    }
`;

export const GridTags = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
       display: flex;

    }

`;