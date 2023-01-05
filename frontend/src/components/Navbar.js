import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import user from "reducers/user";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hamburger from 'hamburger-react'

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false)

  return (
    <Nav>
      <header>
      <HamburgerButton>
            <Hamburger
              label="Show menu"
              rounded 
              toggled={isOpen}
              toggle={setOpen}
            />
          </HamburgerButton>
          <Menu isOpen={isOpen}>
          <ul><NavLink to ="/"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400' })}> Start</NavLink></ul>
          <ul><NavLink to ="/locations"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Besöksmål</NavLink></ul>
          <ul><NavLink to ="/profile"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Profil</NavLink></ul>
          <ul><NavLink to ="/login"style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Logga in</NavLink></ul>
          <ul><NavLink onClick={() => {dispatch(user.actions.setAccessToken(null)); navigate("/");} }>
          Logga ut
        </NavLink></ul>
        </Menu>
      </header>
    </Nav>
  )
}

/*const HeaderGroup = styled.ul`
  display: flex;
  flex-direction: row;
`*/
const Nav = styled.div`
//display: flex;
//align-items: center;
//justify-content:center`

const HamburgerButton = styled.div`
  display: none;
  color: black; 
  margin: 10px;
  
  @media (max-width: 668px){
  display: flex;
  }
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  
  @media (max-width: 668px) {
    overflow: hidden;
    //background-color: green;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  }
`


