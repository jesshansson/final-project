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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //padding-bottom: 10vh;
  }

  a {
    color: black;
  }

  a:hover {
    color: black;
  }
`
export const Title = styled.h1`
  color: black;
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
  //width: 100vw;
`

//@media ${Devices.tablet} 
//@media ${Devices.laptop} 
//@media ${Devices.desktop} 


//Colour scheme
//#CEE5D0 - lightgreen
//#FCF8E8 - lightbeige
//#ECB390 - orange-ish

export const DescriptionProfile = styled.div`
font-size: 18px;
`

export const SoMeIconLink = styled.i`
  display: flex;
  margin: 5px;
  font-size: 24px;
  color: #ECB390;
`

export const SoMeIcon = styled.a`
  text-decoration: none;
  font-size: 22px;
  color: black;

  :hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
` 
