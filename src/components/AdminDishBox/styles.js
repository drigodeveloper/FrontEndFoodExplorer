import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";
import { Link } from "react-router-dom";



export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 13.1rem;
padding: 1.5rem;
margin-right: 1rem;
border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_300};
background: ${({theme}) => theme.COLORS.BACKGROUND_900};
border-radius: 8px;
    


>.likeButton {
   
    }
    
    > a img {
        display: flex;
        width: 11rem;
        height: 11rem;
        margin: 0 auto 1rem ;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: .8rem;
        font-style: normal;
        font-weight: 500;
        text-align: center;
        margin-top: .7rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    >p {
        display: none;
    }

    > h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_BLUE};
        text-align: center;
        margin: .7rem 0;
    }

    >.counter {
        display: flex;
        align-self: center;
        margin-bottom: 1rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        width: 19rem;

        >img{
            width: 11rem;
            height: 11rem;
        }

        > h1 {
        font-size: 1.5rem;
        }

        >p {
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 400;
        align-self: center;
        }

        >h2 {
        font-size: 2rem;

        }

    

    }
    
`;

export const UpdateButton = styled(Link)`
        background-color: transparent;
        border: none;
        position: absolute;
        top: 1rem;
        right: 1rem;
        
        >svg {
            width: 1.5rem;
            height: 1.5rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            
            
        }
`; 




