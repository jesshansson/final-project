<<<<<<< HEAD
import React, { useEffect } from 'react'
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from 'reducers/user';
import { Devices } from './GlobalStyles';

export const Locations = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/utloggad");
    }
  }, [accessToken])

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
=======
import React, { useeffect, useState } from "react";

export const Locations = () => {
  const [location, setLocation] = useState()
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": accessToken
    }
  }
  fetch("http://localhost:8080/locations")
    .then(res => res.json())
    .then(data => setLocation(data))
  return (
    <>
      <h1>Hello</h1>
      {data.name}
    </>
  )
}
>>>>>>> 2998924 (trying fetches)
