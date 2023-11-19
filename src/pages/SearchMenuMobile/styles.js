import styled from "styled-components";

export const Container = styled.div`
width: 100%;

 > .search{
    width: 100%;
    padding: 0 1.7rem;
    margin-top: 2.2rem;
 }

 >button {
    margin: 2.2rem 1.7rem;

    background: transparent;
    border: none;

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

    > button {
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
    }

    
`;

