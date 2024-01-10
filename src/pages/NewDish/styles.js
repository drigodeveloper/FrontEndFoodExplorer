import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    >a {
        display: flex;
        width: fit-content;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};

        align-items: center;

        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;

        margin: 1rem 2rem;
        font-size: 1rem;
    }
`;

export const Content = styled.form`
display: flex;
flex-direction: column;

padding: 1rem 2rem;

> .rowDesktopOne {
    display: flex;
    flex-direction: column;
   
    >label {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1.5rem 0 1.5rem 0;
    }
}

> .rowDesktopTwo {
    
    >label {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;
        > .newTags {
            display: flex;
            background-color: ${({theme}) => theme.COLORS.DARK_BACKGROUND};
            padding: .5rem;
            border-radius: 8px;
        }
    }
}
            
            


> h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;   
    margin-bottom: 2rem;
}

>label {
    margin: 1.5rem 0 1rem 0;
}

>textarea {
width: 100%;

font-family: 'Roboto', sans-serif;

border: none;
border-radius: 5px;

padding: 0.8rem;
margin-bottom: 1.5rem;

color: ${({theme}) => theme.COLORS.WHITE};
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};


&:placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_300};
}

}



@media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
    padding: 0 7.2rem 7.6rem;
    > .rowDesktopOne {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        align-items: center;
        gap: 2rem;
        min-width: 100%;
        
        > label {
            display: flex;
            flex-direction: column;
            gap: 1rem;

        }
    }

    > .rowDesktopTwo {
        display: grid;
        grid-template-columns: 52rem auto;
        gap: 2rem;
    }

    > .saveButton {
        width: 10.2rem;
        align-self: flex-end;
    }

   
}

    
`;

export const DishAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    
    
    > .photoDish {
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: ${({theme}) => theme.COLORS.DARK_BACKGROUND};
        width: 100%;
        height: 3rem;
        border-radius: 8px;
        padding: .7rem 2rem;

        >input {
            display: none;
    
        }

        > svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: .5rem;
        }

        > span {
            font-family: 'Poppins', sans-serif;
            font-size: .8rem;
            font-style: normal;
            font-weight: 500;
        }
    }

`;

