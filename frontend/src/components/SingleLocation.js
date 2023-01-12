import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { BASE_URL, API_URL, API_SINGLE } from "utils/utils";
import { Link } from 'react-router-dom';
import googleIcon from "./googleIcon.png"
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
          <SingleLocationName> <a href={details.website}>{details.name}</a></SingleLocationName>
          <Description>{details.description}</Description>
          <SingleLocationDivs>
            <SingleLocationDivLeft>
              <Image src={details.img} style={{ width: 220, height: 220 }} alt="picture" />
              <OpeningHours><Bold>Öppettider:</Bold>
                <li><Bold>Måndag:</Bold> {details.opening_hours_mon}</li>
                <li><Bold>Tisdag:</Bold> {details.opening_hours_tue}</li>
                <li><Bold>Onsdag:</Bold> {details.opening_hours_wed}</li>
                <li><Bold>Torsdag:</Bold> {details.opening_hours_thu}</li>
                <li><Bold>Fredag:</Bold> {details.opening_hours_fri}</li>
                <li><Bold>Lördag:</Bold> {details.opening_hours_sat}</li>
                <li><Bold>Söndag:</Bold> {details.opening_hours_sun}</li>
              </OpeningHours>
            </SingleLocationDivLeft>
            <SingleLocationDivMiddle>
              <Image src={googleIcon} style={{ width: 220, height: 220 }} alt="googlemaps icon " />
              <a href={details.googlemap}>Hitta hit</a>
              <LocationDetails>Närmaste station: {details.closestStation}</LocationDetails>
              <LocationDetails>Inträde: {details.entranceFee}:- </LocationDetails>
            </SingleLocationDivMiddle>
            <IWantToGoDiv>
              <p>Jag vill gå! </p>
            </IWantToGoDiv>
            <SingleLocationDivRight>
              <p>Jag vill gå! Kontakta mig</p>
              <Users>Cecilia</Users>
              <Users>Maria</Users>
              <Users>Jessica</Users>
              <Users>Fanny</Users>
              <Users>Jessika</Users>
              <Users>Linnéa</Users>
              <Users>Tina</Users>
              <Users>Thérèse</Users>
              <Users>Linda</Users>
              <Users>Emil</Users>
            </SingleLocationDivRight>
          </SingleLocationDivs>
          <Link to="/locations"> Tillbaka </Link>
        </LocationWrapper>
      </>
    )
  } else {
    return (
      <>

        <LocationWrapper>
          <SingleLocationName> <a href={details.website}>{details.name}</a></SingleLocationName>
          <Description>{details.description}</Description>
          <SingleLocationDivs>
            <SingleLocationDivLeft>
              <Image src={details.img} style={{ width: 220, height: 220 }} alt="picture" />
              <LocationDetails>Höjdpunkter: {details.highlights}</LocationDetails>
              <LocationDetails>Aktiviteter: {details.activities}</LocationDetails>
            </SingleLocationDivLeft>
            <SingleLocationDivMiddle>
              <Image src={googleIcon} style={{ width: 220, height: 220 }} alt="googlemaps icon " />
              <a href={details.googlemap}>Hitta hit</a>
              <LocationDetails>Närmaste station: {details.closestStation}</LocationDetails>
              <LocationDetails>Inträde: {details.entranceFee}:- </LocationDetails>
            </SingleLocationDivMiddle>
            <IWantToGoDiv>
              <p>Jag vill gå! </p>
            </IWantToGoDiv>
            <SingleLocationDivRight>
              <p>Jag vill gå! Kontakta mig</p>
              <Users>Cecilia</Users>
              <Users>Maria</Users>
              <Users>Jessica</Users>
              <Users>Fanny</Users>
              <Users>Jessika</Users>
              <Users>Linnéa</Users>
              <Users>Tina</Users>
              <Users>Thérèse</Users>
              <Users>Linda</Users>
              <Users>Emil</Users>
            </SingleLocationDivRight>
          </SingleLocationDivs>
          <Link to="/locations"> Tillbaka </Link>
        </LocationWrapper>
      </>
    )
  }
}

const SingleLocationName = styled.h1`
font-family: 'Girassol', cursive;
font-size: 45px;
padding: 20px;
margin: 10px;
text-decoration: none;
border-radius: 3px;
background-color: #FCF8E8;
`

export const LocationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(140deg, #FCF8E8 60%, #ECB390 60%);
  font-family: "montserrat";
`
export const SingleLocationDivs = styled.div`
display: grid;
justify-items: center;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(3, 1fr);

@media ${Devices.tablet} {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
    /* margin:  15px;
    padding: 20px 10px;
    width: 300px; */
  } 

  @media ${Devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 40px;
  }
`

export const SingleLocationDivLeft = styled.div`
grid-row-start: 1;
grid-row-end: 4;
width: 350px;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  border-radius: 10px;
  background-color: #FCF8E8;
  border: 2px solid #e8894f;
  box-shadow: 5px 3px 3px #e8894f;
`

export const SingleLocationDivMiddle = styled.div`
grid-row-start: 1;
grid-row-end: 3;
width: 350px;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  border-radius: 10px;
  background-color: #FCF8E8;
  border: 2px solid #e8894f;
  box-shadow: 5px 3px 3px #e8894f;
`

export const IWantToGoDiv = styled.div`
grid-row-start: 3;
grid-row-end: 4;
width: 350px;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  background-color: #FCF8E8;
  border: 2px solid #e8894f;
  box-shadow: 5px 3px 3px #e8894f;
`

export const SingleLocationDivRight = styled.div`
grid-row-start: 1;
grid-row-end: 4;
width: 350px;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  border-radius: 10px;
  background-color: #FCF8E8;
  border: 2px solid #e8894f;
  box-shadow: 5px 3px 3px #e8894f;
`

export const Image = styled.img`
  border-radius: 50%;
margin: 10px;
border: 2px solid #FCF8E8;
`

export const Description = styled.p`
width: 70%;
padding: 15px;
text-align: center;
`

export const Name = styled.h1`
font-size: 30px ;
`

export const LocationDetails = styled.p`
font-size: 17px;
`

export const ExtraInfo = styled.div`
/* width: 50%; */
padding: 10px 10px 10px 10px;
`

export const OpeningHours = styled.ul`
padding: 10px;
/* border: 2px solid #ECB390; */
font-size: 17px;
border-radius: 5%;
`

export const Bold = styled.span`
font-weight: bold;
`
export const Users = styled.button`
padding: 0px, 5px;
background-color: #CEE5D0;
width: 100px;
margin: 2px;

`
