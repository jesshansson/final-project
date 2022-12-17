import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = () => {
  return (
    <section>
      <header>
          <HeaderLink><Link to ="/">Start</Link></HeaderLink>
          <ul><Link to ="/locations">Besöksmål</Link></ul>
          <ul><Link to ="/profile">Profil</Link></ul>
          <ul><Link to ="/login">Logga ut</Link></ul>
      </header>
    </section>
  )
}

const HeaderLink = styled.ul`
text-decoration: none;
`

