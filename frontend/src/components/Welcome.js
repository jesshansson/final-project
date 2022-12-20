import React from "react";
import styled from "styled-components";
import { Devices } from './GlobalStyles';
import { Link } from "react-router-dom";

export const Welcome = () => {

  return (
    <WelcomeWrapper>
        <WelcomeHeader>
          Välkommen!
        </WelcomeHeader>
        <WelcomeText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante tellus. Aenean sed urna eget magna eleifend laoreet. Aenean faucibus odio nisi. Suspendisse potenti. Morbi nec libero dignissim, vestibulum mi dapibus, efficitur nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nibh et magna fringilla mollis a.
        </WelcomeText>
        <RegisterWrapper>Bli enkelt medlem genom att fylla i formuläret</RegisterWrapper>
        <RegisterForm></RegisterForm>
        <LoginLink>Redan medlem?<Link to ="/login"> Klicka här för att logga in!</Link></LoginLink> 

    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`
const WelcomeHeader = styled.h1`
  margin-top: 5vh;
  font-size: 30px;
`

const WelcomeText = styled.div`
  margin: 20px;
  width: 70vw;

@media ${Devices.tablet} {
  width: 50vw;
  }
`

const LoginLink = styled.p`
  font-size: 20px;
  margin-top: 20px;
  width: 50vw;
  text-align: center;

&:hover {
    text-decoration: none;
  }
`

const RegisterWrapper = styled.div`
  margin:10px;
  font-size: 20px;`

const RegisterForm = styled.form`
  width: 20vw;
  height: 20vh;
  border: 1px solid black`