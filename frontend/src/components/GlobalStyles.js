import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCF8E8;
    width: 100%;
    height: 100%;
    display: flex; 
  }
  footer {
    background-color: #CEE5D0;
    height: 10vh;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    height: 10vh;
    background-color: #CEE5D0;
  }

  header ul {
    margin: 20px;
  }
`

const sizes = {
  tablet: '668px',
  laptop: '1024px',
  desktop: '2560px'
};

export const Devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`
};




//Colour scheme
//#CEE5D0 - lightgreen
//#FCF8E8 - lightbeige

//#D9D9D9
//#D9D9D9