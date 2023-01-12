import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const NotFound = () => {

  return (
    <NotFoundSection>
      <H1>Sidan hittades inte</H1>
      <Link to="/"> ← Gå tillbaka till startsidan</Link>
    </NotFoundSection>
  )
}

const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  font-size: 20px;
  
  a {
    transition: ease-out 0.2s;
    text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
  }

`

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-family: 'Girassol', cursive;

`