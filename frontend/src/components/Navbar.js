import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import user from "reducers/user";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Hamburger from 'hamburger-react'
import { Devices } from './reusable-components/GlobalStyles';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false)
  const closeSideBar = () => {setOpen(false)}

  return (
    <Nav>
      <HeadingWrapper>
      <Heading>Samlas</Heading>
      <img src='https://i.postimg.cc/vZTKLG42/icons8-speech-bubble-80.png' />
      </HeadingWrapper>
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
  padding: 14px 0px;
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
  cursor: pointer
`


const HeadingWrapper = styled.h1`
display: flex;
justify-content: center;
padding: 20px;
@media ${Devices.laptop} {
    justify-content: flex-start;
    }
    @media ${Devices.desktop} {
     justify-content: flex-start;
    }
`
const Heading = styled.h1`
font-family: 'Girassol', cursive;
font-size: 70px;
@media ${Devices.laptop} {
    font-size: 100px;
    }
    @media ${Devices.desktop} {
     font-size: 120px;
    }
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
  margin-right: 15px;

  
  @media (max-width: 668px) {
    flex-direction: column;
    padding: 0px;
    line-height: 5px;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
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
