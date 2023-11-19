import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;

    >svg{
        width: 2.6rem;
        height: 2.6rem;
        color: ${({theme}) => theme.COLORS.BLUE};
        margin-right: 1.2rem;

    }

    > p {
        font-family: Roboto;
        font-size: 37.243px;
        font-style: normal;
        font-weight: 700;
    }
`;