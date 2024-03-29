import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;
    height: 100%;
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

    @media (min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        
    }
    
`;

export const AbaQrCode = styled.div`
    margin: 2rem auto;

> img {
        width: 11rem;
        height: 11rem;
    }
`;

export const AbaCreditCard = styled.form`
    display: flex;
    flex-direction: column;

    padding: 3.5rem 1.6rem;

    >label {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }

    >input {
        width: 100%;
            height: 3rem;
            margin-top: .5rem;
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.WHITE};
            border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;
            padding: 0.4rem;
        }

    >.inputsBox {
        display: flex;
        gap: 1rem;
        margin: 2.3rem 0;

    }
    
    >.inputsBox .validity {

        >label {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }
        
        >input {
            width: 100%;
            height: 3rem;
            margin-top: .5rem;
            background-color: transparent;
            border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            color: ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;
            padding: 0.4rem;

        }
    }

    >.inputsBox .cvc {

        >label {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }

        >input {
            width: 100%;
            height: 3rem;
            margin-top: .5rem;
            background-color: transparent;
            border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            color: ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;
            padding: 0.4rem;


        }
    }

`;



