import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 0 4rem;


width: 100%;

.logo{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 9.8rem 0 4.5rem 0; 
    


}




@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
display: flex;
flex-direction: row;
padding: 0 6.7rem;
align-items: center;
justify-content: center;


}
   
`;

export const Form = styled.form`
display: flex;
flex-direction: column;

> h1 {
    display: none;
}

> :nth-child(4) {
    margin-top: 2rem;
}

> :nth-child(6) {
    margin: 2rem 0 2rem 0;
}

@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    min-width: 29.7rem;
    border-radius: 1rem;
    padding: 4rem;
    /* margin: 8rem 0; */
    

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    >h1 {
        display: flex;
        align-self: center;
        margin-bottom: 2rem;
    }

    >label {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    > button {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
}
   
`;

export const ButtonText = styled.button`
    background: transparent;
    border: none;

    > span {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`;