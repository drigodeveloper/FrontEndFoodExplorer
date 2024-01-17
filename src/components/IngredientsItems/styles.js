import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_500};
    color: ${({theme}) => theme.COLORS.DARK_BACKGROUND};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};
    border-radius: 5px;
    margin-right: 1rem;

    > button {
        border: none;
        background: none;

        >svg {
            width: 1rem;
            height: 1rem;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    >input {
        width: 100%;
        height: 2rem;
        padding: .6rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};

        }

    }
    
    
    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIO}) {
        background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_500};
        
    }
`;