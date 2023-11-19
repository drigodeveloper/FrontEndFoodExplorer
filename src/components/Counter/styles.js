import styled from "styled-components"; 

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: .5rem;

    >button {
        width: 1.6rem;
        height: 1.6rem;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.3rem;
        

    }

    > input {
        width: 1.6rem;
        height: 1.6rem;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};

        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 700;

    }
`;