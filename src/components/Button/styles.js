import styled from "styled-components";

export const Container = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .5rem;
        width: 100%;
        height: 3rem;

        border-radius: .3rem;
        border: none;
        margin-right: 2rem;

        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: ${({theme}) => theme.COLORS.RED};

        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;

        >svg {
            width: 2rem;
            height: 2rem;
        }

`;