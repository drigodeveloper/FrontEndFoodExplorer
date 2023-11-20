import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`

   
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
   
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
`;


