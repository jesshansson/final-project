import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCF8E8;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  footer {
    background-color: #CEE5D0;
    height: 12vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer ul {
    margin: 20px;
  }

  footer a {
    text-decoration: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    height: 12vh;
    background-color: #CEE5D0;
    text-decoration: none;
  }

  header ul {
    margin: 20px;
  }

  header a {
    text-decoration: none;
  }

`
export const Title = styled.h1`
color: indianred;
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
//@media ${Devices.tablet} {}
//@media ${Devices.laptop} {}
//@media ${Devices.desktop} {}


//Colour scheme
//#CEE5D0 - lightgreen
//#FCF8E8 - lightbeige
//#ECB390 - orange-ish
