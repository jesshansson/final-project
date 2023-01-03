import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
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
          <ul><NavLink to ="/"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400' })}> Start</NavLink></ul>
          <ul><NavLink to ="/locations"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Besöksmål</NavLink></ul>
          <ul><NavLink to ="/profile"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Profil</NavLink></ul>
          <ul><NavLink to ="/login"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Logga in</NavLink></ul>
          <ul><NavLink onClick={() => {dispatch(user.actions.setAccessToken(null)); navigate("/utloggad");} }>
          Logga ut
        </NavLink></ul>
      </HeaderGroup>
      </header>
    </section>
  )
}

const HeaderGroup = styled.ul`
  display: flex;
  flex-direction: row;

`

