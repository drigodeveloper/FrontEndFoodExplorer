import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   :root {
      font-size: 16px;
   }

   @media (max-width: ${DEVICE_BREAKPOINTS.MEDIO}){
      body{
         font-size: 12px;
      }

   }

}
 body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
 }

 body, input, button, textarea {
   font-family: 'Poppins', sans-serif;
  
 }

 a {
    text-decoration: none;
 }

 button, a {
    cursor: pointer;
    transition: filter 0.2;
 }

 button:hover, a:hover {
    filter: brightness(0.9);
 }
`;
