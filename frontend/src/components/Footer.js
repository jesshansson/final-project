import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Devices } from './GlobalStyles';


export const Footer = () => {
  return (
    <FooterWrapper>
      <footer>
          <ul>Kontakt</ul>
          <ul><Link to ="/about">Om oss</Link></ul>
      </footer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
`