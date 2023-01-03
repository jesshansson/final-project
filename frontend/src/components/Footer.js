import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Devices } from './reusable-components/GlobalStyles';

//Det verkar vara GlobalStyles som rör till det med att footern inte hamnar längst ner
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

const FooterWrapper = styled.footer``
/*
const FooterWrapper = styled.footer`
    font-family: Montserrat;
    background: #CEE5D0;
    text-align: center;
    color: rgb(255, 255, 255);
    margin-top: 25px;
    padding: 10px;
    line-height: 25px;
    padding-bottom: 70px;
`*/