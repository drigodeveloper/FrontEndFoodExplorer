import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'


export const Container = styled.footer`
    width: 100%;
    height: 4.8rem;
    grid-area: footer;

    position: fixed;

    bottom: 0;

    
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    margin-top: 3.3rem;

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;   
        color: ${({theme}) => theme.COLORS.GRAY_300}; 
        display: flex;
        gap: 0.37rem;
        align-items: center;
        justify-content: center;
    }

    

    > p {
        display: flex;
        gap: 0.37rem;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-family: 'DM Sans', sans-serif;
        font-size: 0.8rem;

        font-style: normal;

    }

    @media(max-width: ${DEVICE_BREAKPOINTS.SMALL}) {
        padding: 1.5rem;
        justify-content: space-between;

        > span {
        font-size: 0.93rem;

    }
    > p {
        font-size: 0.75rem;

    }


    }

`;