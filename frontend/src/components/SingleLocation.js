import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { API_URL } from "utils/utils";
import { Link } from 'react-router-dom';
import picture from "./picture.jpg"
// import { Interested } from "./ShowInterest";

export const SingleLocation = () => {
  const params = useParams()
  // console.log(params)
  // const { id } = useParams()

  const [detailsCulture, setDetailsCulture] = useState([])
  const [detailsNature, setDetailsNature] = useState([])

  const matchCulture = detailsCulture.find((location) => location.name === params.name)
  const matchNature = detailsNature.find((location) => location.name === params.name)
  // (API_URL("games")

  useEffect(() => {
    fetch("http://localhost:8080/locations/")
      .then(res => res.json())
      .then((data) => {
        setDetailsCulture(data.response.culture)
        setDetailsNature(data.response.nature)
      })
      .catch(error => console.error(error))
  }, [])

  console.log(matchCulture)
  console.log(matchNature)



  if (matchCulture) {
    return (
      <>
        <Link to="/locations"> ↩ Tillbaka </Link>
        <LocationWrapper>
          <SingleLocationDiv>
            <Image src={picture} style={{ width: 300, height: 200 }} alt="picture" />
            <Name>{matchCulture.name}</Name>
            <Description>{matchCulture.description} </Description>
            <LocationDetails>
              <ExtraInfo>
                <h3><Bold>Inträde:</Bold> {matchCulture.entranceFee}:- kr</h3>
                <h3><Bold>Tillgång till café:</Bold> {matchCulture.cafe.toString()}</h3>
                <h3><Bold>Närmaste hållplats:</Bold> {matchCulture.closestStation}</h3>
                <h3><Bold>Hemsida:</Bold> {matchCulture.website}</h3>
              </ExtraInfo>
              <OpeningHours><Bold>Öppettider:</Bold>
                <li>Måndag: {matchCulture.opening_hours_mon}</li>
                <li>Tisdag: {matchCulture.opening_hours_tue}</li>
                <li>Onsdag: {matchCulture.opening_hours_wed}</li>
                {/* thursday is called thu in schema and thur in json - change one or the other*/}
                <li>Torsdag: {matchCulture.opening_hours_thu}</li>
                <li>Fredag: {matchCulture.opening_hours_fri}</li>
                <li>Lördag: {matchCulture.opening_hours_sat}</li>
                <li>Söndag: {matchCulture.opening_hours_sun}</li>
              </OpeningHours>
            </LocationDetails>
            {/* <Interested /> */}
          </SingleLocationDiv>
        </LocationWrapper>
      </>
    )
  } else if (matchNature) {
    return (
      <>
        <Link to="/locations"> ↩ Tillbaka </Link>
        <LocationWrapper>
          <SingleLocationDiv>
            <Image src={picture} style={{ width: 300, height: 200 }} alt="picture" />
            <Name>{matchNature.name}</Name>
            <Description> {matchNature.description} </Description>
            <h2>highlights: {matchNature.highlights}</h2>
            <h2>activities: {matchNature.activities}</h2>
            <h3>Toilet: {matchNature.toilet.toString()}</h3>
            {/* <Interested /> */}
          </SingleLocationDiv>
        </LocationWrapper>
      </>
    )
  }
}

const LocationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SingleLocationDiv = styled.div`
width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
  border-radius: 5%;
  border: 2px solid #e8894f;
`
export const Image = styled.img`
border-radius: 10%;
margin: 10px;
border: 2px solid #FCF8E8;
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


