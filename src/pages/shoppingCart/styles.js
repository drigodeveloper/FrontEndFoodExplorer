import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
   

`;

export const Content = styled.div`
    padding: 2.1rem 7.6rem;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 2.1rem;
    }

    >ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    > ul li {
        display: flex;
        list-style: none;
        align-items: center;

    }

    > ul li img {
        width: 6.2rem;
        height: 6.2rem;
        margin-right: 1rem;

    }
`;

