import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


export const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
  }
  body::-webkit-scrollbar-track {
    background: rgb(22, 22, 20);        /* color of the tracking area */
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */ 
  }

  html {
    font-size: 52.5%;
    scroll-behavior: smooth;
  }


  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;


    // background animations
    background-size: 400% 400%;
    background-image: linear-gradient(
          -48deg, 
          ${props => props.theme.colors.background1} 0%, 
          ${props => props.theme.colors.background2} 25%, 
          ${props => props.theme.colors.background1} 51%, 
          ${props => props.theme.colors.background2} 100%
    );  
    animation: AnimateBG 5s ease infinite;

    @media ${(props) => props.theme.breakpoints.md} {
      background: ${props => props.theme.colors.background2}; 
    }
  }

  @keyframes AnimateBG { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  
  a {
    text-decoration: none;
    color: ${ props => props.theme.colors.links };
  }
  li{
    list-style: none;
  }

`;