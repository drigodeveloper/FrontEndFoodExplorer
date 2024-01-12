import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
width: 100%;

 > .search{
    width: 100%;
    padding: 0 1.7rem;
    margin-top: 2.2rem;
 }

 > nav a {
    display: flex;
    flex-direction: column;
    margin: 2.2rem 1.7rem;
    padding: 0 0 .6rem 0;

    background: transparent;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.WHITE};

    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    color: ${({theme}) => theme.COLORS.WHITE};

 }



`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 3.5rem 1.7rem 1.5rem ;
    width: 100%;
    height: 7.1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};   
    
    `;

    export const CloseButton = styled(Link)`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};

    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;

    >svg {
        width: 1.1rem;
        height: 1.1rem;
    }
`;
