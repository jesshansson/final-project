import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotLoggedIn = () => {

  return (
    <LoggedOutWrapper> 
      <Text>Du är utloggad</Text>
    <Link to="/login">Logga in igen</Link>
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


a {
  transition: ease-out 0.2s;
  text-decoration: none;
  font-size: 20px;

&:hover {
  transform: scale(1.05);
}
}


`