import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Devices, Headline } from './reusable-components/GlobalStyles';

export const Locations = () => {

  const [cultureLocation, setCultureLocation] = useState([])
  const [natureLocation, setNatureLocation] = useState([])

  useEffect(() => {
    fetch("https://final-project-m2dbj6puqa-lz.a.run.app/locations")
      .then(res => res.json())
      .then(data => {
        setNatureLocation(data.response.nature)
        setCultureLocation(data.response.culture)
        console.log(data.response.culture)
        console.log(data.response.nature)
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <LocationsWrapper>
      <Headline>För dig som gillar kultur</Headline>
      <LocationGrid>
        {cultureLocation.map((item) => (
          <GridItem key={item._id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/locations/${item._id}`}>
              <Image src={item.img} style={{ width: 150, height: 150 }} alt="picture" />
              <LocationName>{item.name} </LocationName>
            </Link>
          </GridItem>
        ))
        }
      </LocationGrid>

      <Headline>För dig som gillar natur</Headline>
      <LocationGrid>
        {natureLocation.map((item) => (
          <GridItem key={item._id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/locations/${item._id}`}>
              <Image src={item.img} style={{ width: 150, height: 150 }} alt="picture" />
              <LocationName>{item.name}</LocationName>
            </Link>
          </GridItem>
        ))
        }
      </LocationGrid>
    </LocationsWrapper>
  )
}

const LocationsWrapper = styled.section`
  max-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LocationGrid = styled.section`
  display: grid;
  grid-gap: 30px;

  @media ${Devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 10px 30px;
  } 

  @media ${Devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const GridItem = styled.div`
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 20px 0px;
  margin: 10px 60px;
  background-color: #ECB390;
  border-radius: 15px;
  align-items: center;
  border: 3px solid #e8894f;
  width: 260px;
  

  @media ${Devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin:  15px;
    padding: 20px 10px;
    width: 300px;
  } 

  @media ${Devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
    margin: 20px 20px;
    padding: 30px 20px;
    width: 350px;
  }

`
const Image = styled.img`
  border-radius: 50%;
  border: 2px solid #FCF8E8;
  margin: 10px 0px;
  padding: 10px;
`

const LocationName = styled.h2`
  padding-top: 10px;
  font-family: 'Comfortaa', cursive;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  font-weight: 600;

@media ${Devices.tablet} {
  font-size: 22px;
  } 
`




