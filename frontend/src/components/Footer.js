import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Devices } from './reusable-components/GlobalStyles';

export const Footer = () => {
  return (
      <FooterWrapper>
          <ul>Kontakt</ul>
          <ul><Link to ="/about">Om oss</Link></ul>
      </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    background-color: #CEE5D0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 0;
    text-decoration: none;
    height: 10vh;
    width: 100%;
    a {
    text-decoration: none;
    }

    @media ${Devices.tablet} {
      //height: 12vh;
    }
  
`
/*
footer {
  background-color: #CEE5D0;

  //position: fixed;
  //position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  //width: 100%;
  //position: relative;
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
*/