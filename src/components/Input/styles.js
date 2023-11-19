import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 3rem;
    
    display: flex;
    align-items: center;

    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};


    > input {
        width: 100%;
        height: 3rem;

        font-family: 'Roboto', sans-serif;

        border: none;
        
        background-color: transparent;
        padding: 0.8rem;

        color: ${({theme}) => theme.COLORS.WHITE};

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

        
    >svg {
        margin-left: 0.8rem;
        width: 1.5rem;
        height: 1.5rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};;
    }
`;