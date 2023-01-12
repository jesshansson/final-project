import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Devices } from './reusable-components/GlobalStyles';
import { Link } from "react-router-dom";
import { PaigeWrapper } from "./reusable-components/GlobalStyles";
import { useDispatch } from 'react-redux';
import user from "reducers/user";

export const Welcome = () => {
  const dispatch = useDispatch();

  const persistedStateJSON = localStorage.getItem("userReduxState");
  if (persistedStateJSON) {
   const persistedState = JSON.parse(persistedStateJSON);
   dispatch(user.actions.setId(persistedState.id))
   dispatch(user.actions.setAccessToken(persistedState.accessToken));
   dispatch(user.actions.setUsername(persistedState.username));
   dispatch(user.actions.setName(persistedState.name));
   dispatch(user.actions.setAge(persistedState.age))
   dispatch(user.actions.setEmail(persistedState.email));
   dispatch(user.actions.setInstagram(persistedState.instagram));
   dispatch(user.actions.setPresentation(persistedState.presentation));
   dispatch(user.actions.setFacebook(persistedState.facebook));
  }
  return (
    <WelcomeWrapper>
      {/* <Link to="/modal"> Modal</Link>
         <Link to="/modal2"> Modal 2</Link>
        <Link to="/slidepanel">Slidepanel</Link> */}
<SmallHeaderText>Välkommen till</SmallHeaderText>
      <WelcomeHeader>
        KULTURLIGTVIS!
      </WelcomeHeader>
      <WelcomeText>
        <Bigtext>
          Detta är sidan för dig som vill utforska nya delar av Stockholms natur- och kulturliv tillsammans med en ny vän. Vår idé är att
          hjälpa människor med liknande intressen att hitta varandra, och ta del av nya upplevelser tillsammans.</Bigtext>
        <Bigtext>Kanske kan vår sida bidra till minskad ensamhet, nya intressen och vänner för livet? Det är åtminstone det som är tanken.
        </Bigtext>
        <Smalltext>
          Så letar du efter du ett spännande museum du inte ens visste fanns? En stig du aldrig vandrat? En ny kultur- eller naturupplevelse?
          Spana in <StyledLink to="/locations">Besöksmålen!</StyledLink> Vill du komma i kontakt med någon som känner likadant? <StyledLink to="/register">Skapa ett konto</StyledLink> för att kunna kontakta varandra.
        </Smalltext>
      </WelcomeText>
      {/* <RegisterLink>Bli enkelt medlem genom att klicka <Link to="/register"> här </Link></RegisterLink>
      <LoginLink>Redan medlem?<Link to="/login"> Klicka här för att logga in!</Link></LoginLink> */}
    </WelcomeWrapper>
  )
}

const StyledLink = styled(Link) `
  transition: ease-out 0.2s;

  &:hover {
  transform: scale(1.1);
};`


export const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(140deg, #FCF8E8 60%, #ECB390 60%);
  height: 100vh;
`

const WelcomeHeader = styled.h1`
  font-size: 50px;
  font-family: 'Caveat', cursive;
  
  @media ${Devices.tablet} {
  margin-bottom: 5px;
  font-size: 65px;
}
`
const SmallHeaderText = styled.p`
  font-family: "Montserrat";
  margin-top: 40px;
  font-size: 25px;
`

const Bigtext = styled.h4`
  font-family: "Montserrat";
  margin: 20px;
  font-size: 19px;

  @media ${Devices.tablet} {
    font-size: 20px;
}
  @media ${Devices.laptop} {
    font-size: 22px;
}
`
const Smalltext = styled.h5`
  font-family: "Montserrat";
  padding: 20px;
  margin: 20px;
  font-size: 17px;

  @media ${Devices.tablet} {
    font-size: 19px;
}
  @media ${Devices.laptop} {
    font-size: 20px;
}
`

const WelcomeText = styled.div`
  margin: 20px;
  width: 90%;
  text-align: center;
  border-radius: 10px;
  background-color: #FCF8E8;
  border: 2px solid #e8894f;
  box-shadow: 5px 3px 3px #e8894f;

  @media ${Devices.tablet} {
  width: 80%;

}
  @media ${Devices.laptop} {
  width: 60%;
  margin-top: 45px;
}
`


