import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Content = styled.div`

padding: 3.5rem 2.1rem;

>h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1rem;
}
    
`;

export const CardHistory = styled.div`
display: flex;
flex-direction: column;
border: 1px solid ${({theme}) => theme.COLORS.WHITE};
padding: 1.2rem;
border-radius: 8px;

>.itens ul {
    display: flex;
}

>.itens ul li {
    list-style: none;
    font-family: 'Roboto', sans-serif;
    font-size: .8rem;
    font-style: normal;
    font-weight: 400;
}

> .status {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    >p{
        font-family: 'Roboto', sans-serif;
        font-size: .8rem;
        font-style: normal;
        font-weight: 400;
    }

    > p svg {
        color: ${({theme}) => theme.COLORS.RED};
    }
}

    
`;






