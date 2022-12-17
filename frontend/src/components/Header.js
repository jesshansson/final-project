import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "reducers/user";
import { Link } from "react-router-dom";
import styled from "styled-components";


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
          <Button
          type="button"
          onClick={() => {
          dispatch(user.actions.setAccessToken(null));
          navigate("/utloggad");
          } }>
          Logga ut
        </Button>
      </HeaderGroup>
      </header>
    </section>
  )
}

const HeaderGroup = styled.ul`
margin: 10px;
display: flex;
flex-direction: row;
`
const Button = styled.button`
background: transparent;
border: none;
cursor: pointer
`
//          <ul><Link to ="/login">Logga ut</Link></ul>
