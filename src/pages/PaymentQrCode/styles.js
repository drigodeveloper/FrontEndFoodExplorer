import styled from "styled-components";

export const Container = styled.div`

`;


export const Content = styled.div`
    padding: 3.5rem 2.1rem;

    h1 { 
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;    
        margin-bottom: 2rem;
    }
`;

export const PaymentCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: .5rem;

    .menuButtons {
        display: flex;
        width: 100%;
    }
    
    > .menuButtons .buttonPix {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        width: 100%;
        height: 5rem;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
        

        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;

        >svg {
            width: 1.5rem;
            height: 1.5rem;
        }

   
    }

    > .menuButtons .buttonCreditCard {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        width: 100%;
        height: 5rem;
        background-color: transparent;
        border: none;
        border-left: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
        border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_500};


        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;

        >svg {
            width: 1.5rem;
            height: 1.5rem;
        }

        >.hide {
        background-color: ${({theme}) => theme.COLORS.DARK_BACKGROUND};
    }

    }

    > img {
        width: 11rem;
        height: 11rem;
        margin: 2rem auto;
    }

    
`;


