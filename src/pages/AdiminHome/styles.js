import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
    width: 100%;
    
   
`;


export const Banner = styled.div`
    width: 100%;
    height: 7.5rem;
    display: flex;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;

    >img {
        display: flex;
        width: 11rem;
        height: 9.3rem;
        margin-top: -1.4rem;
        
    }
    

>.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1 {
     font-family: 'Poppins', sans-serif;
     font-size: 1.1rem;
     font-style: normal;
     font-weight: 600;
    }
    
    > p{
    font-family: 'Poppins', sans-serif;
    font-size: .7rem;
    font-style: normal;
    font-weight: 400;
    }

}

@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    height: 16.2rem;
    margin-top: 10.2rem;
    >img {
        display: flex;
        width: 39.5rem;
        height: 25.3rem;
        margin-top: -9rem;
        
    }

    >.description {
    
    > h1 {
     font-size: 2.5rem;
    }
    
    > p{
    font-size: 1rem;
    }

}
    
    

}
   
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        padding: 1rem 7.7rem;

    }
`;


