import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
display: flex;
width: 100%;
height: 7.1rem;

align-items: center;
justify-content: space-evenly;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};




> .buttonMenu {
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    width: 1.5rem;
    height: 1.5rem;

    > svg {
        width: 1.5rem;
        height: 1.5rem;
    }


}

.requestsButton {
    display: flex;
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    width: 1.5rem;
    height: 1.5rem 

    

}
> .inputSearch, .buttonLogout {
    display: none;
}

@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    > .buttonMenu {
        display: none;
    }

    > .inputSearch {
        display: flex;
        width: 36.31rem;
    }

    > .requestsButton {
        background-color: ${({theme}) => theme.COLORS.RED};

        > .textButton {
            background-color: ${({theme}) => theme.COLORS.RED};

        }
    }


    > .buttonLogout {
        
        display: flex;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 2rem;
        height: 2rem;

        

    > svg {
        width: 2rem;
        height: 2rem;
}
    }


}


    
`;

export const Logo = styled.div`
    display: flex;

    >svg {
        color: ${({theme}) => theme.COLORS.BLUE};
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .5rem;

    }

    >h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 700;
    }
`;