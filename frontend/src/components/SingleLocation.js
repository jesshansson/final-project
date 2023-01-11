import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { BASE_URL, API_URL, API_SINGLE } from "utils/utils";
import { Link } from 'react-router-dom';
import picture from "./picture.jpg"
import { LocationName } from "./Locations";

export const SingleLocation = () => {
  const { id } = useParams()

  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://final-project-m2dbj6puqa-lz.a.run.app/locations/${id}`)
      .then(res => res.json())
      .then((data) => {
        console.log(id)
        setDetails(data.response)
      })
      .catch(error => console.error(error))
  }, [])

  console.log(details)

  //turns object into array to be able to render it an use .includes
  const filteredLocations = Object.keys(details)
  console.log(filteredLocations)

  if (filteredLocations.includes("genre")) {
    return (
      <>
        <LocationWrapper>
          <SingleLocationName>{details.name}</SingleLocationName>
          <SingleLocationDiv>


            {details.description}
            <ImageAndDetails>
              <Image src={details.img} style={{ width: 150, height: 150 }} alt="picture" />
              <a href={details.website}>Hemsida</a>
              <a href={details.googlemap}>Hitta hit</a>
              {details.closetStation}
              {details.entranceFee}
              <p>{details.cafe.toString()}</p>
              <OpeningHours><Bold>Öppettider:</Bold>
                <li><Bold>Måndag:</Bold> {details.opening_hours_mon}</li>
                <li><Bold>Tisdag:</Bold> {details.opening_hours_tue}</li>
                <li><Bold>Onsdag:</Bold> {details.opening_hours_wed}</li>
                <li><Bold>Torsdag:</Bold>{details.opening_hours_thu}</li>
                <li><Bold>Fredag:</Bold> {details.opening_hours_fri}</li>
                <li><Bold>Lördag:</Bold> {details.opening_hours_sat}</li>
                <li><Bold>Söndag:</Bold> {details.opening_hours_sun}</li>
              </OpeningHours>
            </ImageAndDetails>
          </SingleLocationDiv>
          <Link to="/locations"> Tillbaka </Link>
        </LocationWrapper>
      </>
    )
  } else {
    return (
      <>
        <Link to="/locations"> ↩ Tillbaka </Link>
        <LocationWrapper>
          <SingleLocationName>{details.name}</SingleLocationName>
          <SingleLocationDiv>
            {details.description}
            <p>Se och göra: {details.highlights}</p>
          </SingleLocationDiv>
          <Link to="/locations"> Tillbaka </Link>
        </LocationWrapper>
      </>
    )
  }
}

const SingleLocationName = styled.h1`
font-size: 25px;
margin-top: 10px`

export const LocationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SingleLocationDiv = styled.div`
  width: 60%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
  background-color: #ECB390;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #e8894f;
`
export const Image = styled.img`
border-radius: 10%;
margin: 10px;
border: 2px solid #FCF8E8;
`
export const ImageAndDetails = styled.div`
display: flex;
flex-direction: row;
`

export const Description = styled.h2`
width: 80%;
padding: 15px;
`

export const Name = styled.h1`
font-size: 30px ;
`

export const LocationDetails = styled.div`
display: flex;
flex-direction: row;
width: 80%;
`

export const ExtraInfo = styled.div`
width: 50%;
padding: 10px 10px 10px 10px;
`

export const OpeningHours = styled.ul`
padding: 10 10 10 0;
`

export const Bold = styled.span`
font-weight: bold;
`
