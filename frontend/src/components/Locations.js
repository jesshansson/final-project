import React, { useEffect, useState } from "react";
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

  const [cultureLocation, setCultureLocation] = useState([])
  const [natureLocation, setNatureLocation] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": accessToken
      }
    }
    fetch("https://final-project-fovvngwz2q-lz.a.run.app")
      .then(res => res.json())
      .then(data => setCultureLocation(data.response.culture))
      .then(console.log(cultureLocation))
      .catch(error => console.error(error))

    fetch("https://final-project-fovvngwz2q-lz.a.run.app")
      .then(res => res.json())
      .then(data => setNatureLocation(data.response.nature))
      .then(console.log(natureLocation))
      .catch(error => console.error(error))

  }, []);

  return (
    <>
      {cultureLocation.map((item) => (
        <GridItem
          key={item._id}>
          <h1>Name: {item.name} </h1>
          <h2>Adress: {item.address}</h2>
          <h3>Map: {item.map}</h3>
        </GridItem>
      ))
      }

      {natureLocation.map((item) => (
        <GridItem
          key={item._id}>
          <h1>Name: {item.name} </h1>
          <h2>Cafe: {item.cafe.toString()}</h2>
          <h3>Map: {item.map}</h3>
        </GridItem>
      ))
      }
    </>
  )


  //     // <header />

  //     // <LocationGrid>
  //     //   <GridItem />
  //     //   <GridItem />
  //     //   <GridItem />
  //     //   <GridItem />
  //     //   <GridItem />
  //     //   <GridItem />
  //     //   <GridItem />
  //     //   <GridItem />
  //     // </LocationGrid>
  //     // <footer />

  //   </section>
  // )
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
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
  `
