import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.form`
display: flex;
flex-direction: column;

padding: 1rem 2rem;

> .newTags {
    display: flex;
    background-color: ${({theme}) => theme.COLORS.DARK_BACKGROUND};
    padding: .5rem;

}

> h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;   
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
        margin-top: 1rem;

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

