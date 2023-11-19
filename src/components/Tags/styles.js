import styled from "styled-components";

export const Container = styled.span`
    padding: 0.5rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};

    border-radius: 8px;

    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;

    margin-right: 0.7rem;
    margin-bottom: 1.5rem;
`;