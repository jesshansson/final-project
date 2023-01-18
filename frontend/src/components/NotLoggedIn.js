import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotLoggedIn = () => {

  return (
    <LoggedOutWrapper> 
      <Text>Du är utloggad</Text>
    <StyledLink to="/login">Logga in igen</StyledLink>
    </LoggedOutWrapper>
  )
}

const LoggedOutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.p`
  margin-top: 10vh;
  font-size: 40px;
  font-family: 'Girassol', cursive;
`

const StyledLink = styled(Link)`
  transition: ease-out 0.2s;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }
`