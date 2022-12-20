import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "reducers/user";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Devices } from "./GlobalStyles";


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section>
      <header>
      <HeaderGroup>
          <ul><Link to ="/">Start</Link></ul>
          <ul><Link to ="/locations">Besöksmål</Link></ul>
          <ul><Link to ="/profile">Profil</Link></ul>
          <ul><Link to ="/login">Logga in</Link></ul>
          <ul><Link
          onClick={() => {
          dispatch(user.actions.setAccessToken(null));
          navigate("/utloggad");
          } }>
          Logga ut
        </Link></ul>
      </HeaderGroup>
      </header>
    </section>
  )
}

const HeaderGroup = styled.ul`
  display: flex;
  flex-direction: row;

  @media ${Devices.tablet} {
  margin: 10px;
  }
`

