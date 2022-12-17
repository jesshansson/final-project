import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const NotFound = () => {

  return (
    <NotFoundSection>
      <H1>Sidan hittades inte</H1>
      <Link to="/"> Gå tillbaka till startsidan</Link>
    </NotFoundSection>
  )
}

const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
`