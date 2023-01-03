import React, { useState }  from "react";
import styled from "styled-components";
import { Devices } from './reusable-components/GlobalStyles';
import { Link } from "react-router-dom";
import { PaigeWrapper } from "./reusable-components/GlobalStyles";
import { useDispatch } from 'react-redux';

export const Welcome = () => {
 
  return (
    <PaigeWrapper>
         <Link to="/modal"> Modal</Link>
        <Link to="/slidepanel">Slidepanel</Link>
        <WelcomeHeader>
          Välkommen!
        </WelcomeHeader>
        <WelcomeText>
          Du är välkommen att kolla runt bland besöksmålen, men för att ta del av funktionerna behöver du skapa ett konto.
        </WelcomeText>
        <RegisterLink>Bli enkelt medlem genom att klicka <Link to ="/register"> här </Link></RegisterLink>
        <LoginLink>Redan medlem?<Link to ="/login"> Klicka här för att logga in!</Link></LoginLink>
    </PaigeWrapper>
  )
}

const WelcomeHeader = styled.h1`
  margin-top: 5vh;
  font-size: 30px;
`

const WelcomeText = styled.div`
  margin: 20px;
  width: 70vw;
  font-size: 17px;
  //text-align: center;

@media ${Devices.tablet} {
  width: 50vw;
  }
`

const RegisterLink = styled.p`
  font-size: 20px;
  margin-top: 20px;
  width: 50vw;
  text-align: center;

&:hover {
    text-decoration: none;
  }
`

const LoginLink= styled(RegisterLink)`
  font-size: 17px;
`
