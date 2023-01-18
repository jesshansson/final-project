import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import user from "reducers/user";
import styled from "styled-components/macro";
import Hamburger from 'hamburger-react'
import { Devices } from './reusable-components/GlobalStyles';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false)
  const closeSideBar = () => { setOpen(false) }
  const userId = useSelector((store) => store.user.id)


  return (
    <Nav>
      <LogoTitle>
        <Link to="/"><Heading> Kulturligtvis </Heading></Link>
      </LogoTitle>
      <HamburgerButton>
        <Hamburger
          label="Show menu"
          rounded
          toggled={isOpen}
          toggle={setOpen}
        />
      </HamburgerButton>
      <Menu isOpen={isOpen}>
        <ul><NavLink to="/" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })}> Start</NavLink></ul>
        <ul><NavLink to="/locations" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })}> Besöksmål</NavLink></ul>
        <ul><NavLink to={`/profile/${userId}`} onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })}> Profil</NavLink></ul>
        <ul><NavLink to="/login" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })}> Logga in</NavLink></ul>
        <ul><NavLink to="/about" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '400' })}> Om oss</NavLink></ul>
        <ul><NavLinkLogOut onClick={() => { dispatch(user.actions.setAccessToken(null)); navigate("/"); closeSideBar; localStorage.removeItem("userReduxState") }} >Logga ut</NavLinkLogOut></ul>
      </Menu>
    </Nav >
  )
}

const Nav = styled.div`
  overflow: hidden;
  background-color: #CEE5D0;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media ${Devices.tablet} {
  flex-direction:row;
  justify-content: space-between ;
  }

  a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 5px;
  text-decoration: none;
  font-size: 17px;

  @media ${Devices.tablet} {
    padding: 14px 0px;
  }

  }

  a:hover {
  color: black;
  transform: scale(1.1);
  transition: 0.3s;
  }
`
const NavLinkLogOut = styled.a`
  cursor: pointer;
  margin-right: 5px;
`


const LogoTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 25px;

  @media ${Devices.laptop} {
    justify-content: flex-start;
    padding: 10px;
  }
  
  @media ${Devices.desktop} {
    justify-content: flex-start;
  }
`
const Heading = styled.h1`
  font-family: 'Girassol', cursive;
  font-size: 55px;
 
  

  @media ${Devices.laptop} {
    font-size: 60px;
  }
  
  @media ${Devices.desktop} {
    font-size: 100px;
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
  align-items: center;
  position: relative;
  margin-right: 25px;

  
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

