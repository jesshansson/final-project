import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";


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

//To use queries
//@media ${Devices.tablet} 
//@media ${Devices.laptop} 
//@media ${Devices.desktop} 


export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #FCF8E8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  a {
    color: black;
  }

  a:hover {
    color: black;
  }
`
export const Headline = styled.h1`
  font-family: 'Girassol', cursive;
  text-align: center;
  font-size: 35px;
  grid-column: 1 / 4;
  grid-row: 1;
  margin: 20px;

  @media ${Devices.tablet} {
  font-size: 40px;
  } 

  @media ${Devices.laptop} {
    font-size: 45px;
  }

`

export const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
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
export const StyledLink = styled(Link)`
  text-decoration: none;
  
  :hover{
  text-decoration: underline;
  }
`
