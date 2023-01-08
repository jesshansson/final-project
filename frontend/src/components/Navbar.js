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
  const closeSideBar = () => {setOpen(false)}

  return (
    <Nav>
      <HamburgerButton>
            <Hamburger
              label="Show menu"
              rounded 
              toggled={isOpen}
              toggle={setOpen}
            />
          </HamburgerButton>
          <Menu isOpen={isOpen}>
          <ul><NavLink to ="/" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400' })}> Start</NavLink></ul>
          <ul><NavLink to ="/locations" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Besöksmål</NavLink></ul>
          <ul><NavLink to ="/profile" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Profil</NavLink></ul>
          <ul><NavLink to ="/login" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600'  : '400'  })}> Logga in</NavLink></ul>
          <ul><NavLinkLogOut onClick={() => {dispatch(user.actions.setAccessToken(null)); navigate("/"); closeSideBar } } >Logga ut</NavLinkLogOut></ul>
        </Menu>
    </Nav>
  )
}

/*const HeaderGroup = styled.ul`
  display: flex;
  flex-direction: row;
`*/
const Nav = styled.div`
overflow: hidden;
background-color: #CEE5D0;
width: 100%;

a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 12px;
  text-decoration: none;
  font-size: 17px;
}

a:hover {
  color: black;
  transform: scale(1.2);
  transition: 0.3s;
}
` 
const NavLinkLogOut = styled.a`
margin-right: 10px;
cursor: pointer
`


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
  position: relative;


  
  @media (max-width: 668px) {
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
  }

  @media (min-width: 668px) {
    display: flex;
    justify-content: flex-end;
  }
`

/*
header ul {
  padding: 5px;
  margin: 5px;
  
  @media ${Devices.tablet} {
    padding: 10px;
    margin: 20px;
  }
}

header a {
  text-decoration: none;
}

*/

  /*
  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 10vh;
    width: 100%;
    background-color: #CEE5D0;
    text-decoration: none;
    
  }
*/
