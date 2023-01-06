import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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
    width: 100vw;
    //position: fixed;
    //position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    //width: 100%;
    position: relative;
    bottom: 0;

    @media ${Devices.tablet} {
      height: 10vh;
    }
  }

  footer ul {
    padding: 20px;
  }

  footer a {
    text-decoration: none;
  }

 /* header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 10vh;
    width: 100vw;
    background-color: #CEE5D0;
    text-decoration: none;
    
  }*/

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

  a {
    color: black;
  }
`
export const Title = styled.h1`
color: indianred;
`
export const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
`
export const CenterFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin: 15px;
`
export const PaigeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  height: 80vh;
`
/*export const OuterWrapper = styled.section`

  body {
    background-color: #FCF8E8;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //padding-bottom: 10vh;
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

  a {
    color: black;
  }
`
*/

//@media ${Devices.tablet} 
//@media ${Devices.laptop} 
//@media ${Devices.desktop} 


//Colour scheme
//#CEE5D0 - lightgreen
//#FCF8E8 - lightbeige
//#ECB390 - orange-ish
