import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Devices } from './reusable-components/GlobalStyles';

//Det verkar vara GlobalStyles som rör till det med att footern inte hamnar längst ner
export const Footer = () => {
  return (
      <footer>
          <ul>Kontakt</ul>
          <ul><Link to ="/about">Om oss</Link></ul>
      </footer>
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

    @media ${Devices.tablet} {
      //height: 12vh;
    }
  
`