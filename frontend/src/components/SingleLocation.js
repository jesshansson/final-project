import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { BASE_URL, API_URL, API_SINGLE } from "utils/utils";
import { Link } from 'react-router-dom';
import picture from "./picture.jpg"
import SlidingPanel from "react-sliding-side-panel";
//import { Interested } from "./ShowInterest";

export const SingleLocation = () => {
  const { id } = useParams()
  // console.log(params)
  // const [openPanel, setOpenPanel] = useState(false);

  const [details, setDetails] = useState([])
  // const [detailsNature, setDetailsNature] = useState([])

  useEffect(() => {
    fetch(`https://final-project-m2dbj6puqa-lz.a.run.app/locations/${id}`)
      .then(res => res.json())
      .then((data) => {
        console.log(id)
        // console.log(matchCulture)
        setDetails(data.response)
        // console.log(details)
      })
      .catch(error => console.error(error))
  }, [])

  console.log(details)


  //FÖRSÖK ATT FILTRERA EFTER GENRE FÖR ATT KUNNA AVGÖRA OM DET ÄR CULTURE OR NATURE
  // const filteredLocations = Object.keys(details)
  //   .filter((key) => key.includes("genre"))
  //   .reduce((obj, key) => {
  //     return Object.assign
  //       (obj, {
  //         [key]: details[key]
  //       })
  //   }, {
  //   })

  const filteredLocations = Object.keys(details)
  // .filter((key) => key.includes("genre"))
  // .reduce((obj, key) => {
  //   return Object.assign(obj, {
  //     [key]: details[key]
  //   })
  // }, {
  // })
  console.log(filteredLocations)
  // const filteredLocations = details.filter((type) => (type.name === "Hellasgården, Nackareservatet") || (type.name === "Hagaparken") || (type.name === "Långholmen") || (type.name === "Nyckelviken") || (type.name === "Vinterviken") || (type.name === "Lövsta"))



  if (filteredLocations.includes("genre")) {
    return (
      <>
        <Link to="/locations"> ↩ Tillbaka </Link>
        {/* <SlidingPanel
        type={'right'}
        isOpen={openPanel}
        size={30}>
        <h2>TEST</h2>
        <div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel> */}
        <LocationWrapper>
          <SingleLocationDiv>
            {details.description}
            <OpeningHours><Bold>Öppettider:</Bold>
              <li>Måndag: {details.opening_hours_mon}</li>
              <li>Tisdag: {details.opening_hours_tue}</li>
              <li>Onsdag: {details.opening_hours_wed}</li>
              <li>Torsdag:{details.opening_hours_thu}</li>
              <li>Fredag: {details.opening_hours_fri}</li>
              <li>Lördag: {details.opening_hours_sat}</li>
              <li>Söndag: {details.opening_hours_sun}</li>
            </OpeningHours>
          </SingleLocationDiv>
        </LocationWrapper>
      </>
    )
  } else {
    return (
      <>
        <Link to="/locations"> ↩ Tillbaka </Link>
        <LocationWrapper>
          <SingleLocationDiv>
            {details.description}
            {details.highlights}
          </SingleLocationDiv>
        </LocationWrapper>
      </>
    )
  }
}

export const LocationWrapper = styled.section`
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



   // const filtered = asArray.filter(([genre, museum]) => typeof museum === "string")
  // const matchCulture = Object.fromEntries(filtered)
  // const filteredLocations = asArray.filter((type) => (type.genre === "Museum") || (type.genre === "Konsthall") || (type.genre === "Teater") || (type.genre === "Friluftsmuseum") || (type.genre === "Bio"))
