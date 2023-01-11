import React, { useState } from "react";
import styled from "styled-components/macro";
import { Devices } from './reusable-components/GlobalStyles';
import { Link } from "react-router-dom";
import { PaigeWrapper } from "./reusable-components/GlobalStyles";
import { useDispatch } from 'react-redux';

export const Welcome = () => {

  return (
    <PaigeWrapper>
      {/* <Link to="/modal"> Modal</Link>
         <Link to="/modal2"> Modal 2</Link>
        <Link to="/slidepanel">Slidepanel</Link> */}

      <WelcomeHeader>
        KULTURLIGTVIS
      </WelcomeHeader>
      <WelcomeText>
        <Bigtext>
          Detta är sidan för dig som vill utforska nya delar av Stockholms natur- och kulturliv tillsammans med en ny vän. Vår idé är att
          hjälpa människor med liknande intressen att hitta varandra, och ta del av nya upplevelser tillsammans.</Bigtext>
        <Bigtext>Kanske kan vår sida bidra till minskad ensamhet, nya intressen och vänner för livet? Det är åtminstone det som är tanken.
        </Bigtext>
        <Smalltext>
          Så letar du efter du ett spännande museum du inte ens visste fanns? En stig du aldrig vandrat? En ny kultur- eller naturupplevelse?
          Spana in <Link to="/locations">Besöksmålen!</Link> Vill du komma i kontakt med någon som känner likadant? <Link to="/register">Skapa ett konto</Link> för att kunna kontakta varandra.
        </Smalltext>
      </WelcomeText>
      {/* <RegisterLink>Bli enkelt medlem genom att klicka <Link to="/register"> här </Link></RegisterLink>
      <LoginLink>Redan medlem?<Link to="/login"> Klicka här för att logga in!</Link></LoginLink> */}
    </PaigeWrapper>
  )
}

const WelcomeHeader = styled.h1`
  margin-top: 5vh;
  font-size: 48px;
  font-family: "Montserrat";
`

const Bigtext = styled.h4`
font-family: "Montserrat";
margin: 20px;
font-size: 17px;
`
const Smalltext = styled.h5`
font-family: "Montserrat";
padding: 20px;
margin: 20px;
font-size: 15px;
`

const WelcomeText = styled.div`
  margin: 20px;
  width: 70vw;
  text-align: center;

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

const LoginLink = styled(RegisterLink)`
  font-size: 17px;
`
