import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Devices } from './GlobalStyles';

export const Locations = () => {

  return (
    <section>
    <LocationGrid>
      <Link to ="/location"><GridItem /></Link> 
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      </LocationGrid>
    </section>
  )
}

export const LocationGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  margin: 30px;
`
export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
  `