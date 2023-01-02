import { createGlobalStyle } from "styled-components";

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

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCF8E8;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //padding-bottom: 10vh;
  }

  footer {
    background-color: #CEE5D0;
    height: 10vh;
    //width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media ${Devices.tablet} {
      height: 12vh;
    }
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
    height: 12vh;
    width: 100vw;
    background-color: #CEE5D0;
    text-decoration: none;
    
  }

  header ul {
    padding: 5px;
    margin: 5px;
    
    @media ${Devices.tablet} {
      padding: 10px;
      margin: 20px;
    }
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

//@media ${Devices.tablet} 
//@media ${Devices.laptop} 
//@media ${Devices.desktop} 


//Colour scheme
//#CEE5D0 - lightgreen
//#FCF8E8 - lightbeige
//#ECB390 - orange-ish
