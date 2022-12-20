import React from "react";
import { Devices } from './GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { API_URL } from "utils/utils";
import { Link } from 'react-router-dom';

export const SingleLocation = () => {
  // const params = useParams()
  // console.log(params)
  const { id } = useParams()

  const [detailsCulture, setDetailsCulture] = useState([])
  const [detailsNature, setDetailsNature] = useState([])

  // const matchCulture = detailsCulture.find((location) => location.name === params.name)
  // const matchNature = detailsNature.find((location) => location.name === params.name)
  // (API_URL("games")

  useEffect(() => {
    fetch(`http://localhost:8080/locations/`)
      .then(res => res.json())
      .then(data => setDetailsCulture(data.response.culture))
      .catch(error => console.error(error))
  }, [id])

  useEffect(() => {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => setDetailsNature(data.response.nature))
      .catch(error => console.error(error))
  }, [id])

 
  // console.log(matchCulture)
  // console.log(matchNature)

  // if (matchCulture) {
    return (
      <section>
        <Link to="/locations"> ↩ Tillbaka </Link>
        <LocationWrapper>
        {detailsCulture.map((culture) => (
          <SingleLocationDiv>
            <h1>Description: {culture.description} </h1>
            <h2>Website: {culture.website}</h2>
            <h3>entranceFee: {culture.entranceFee}</h3>
            {/* <h1>Img: {details.img} </h1> */}
            {/* <h2>highlights: {item.highlights}</h2>
              <h3>Toilet: {item.toilet}</h3> */}
          </SingleLocationDiv>
        ))}</LocationWrapper>
        
      </section>
    )
  // } else if (matchNature) {
  //   return (
  //     <section>
  //       {detailsNature.map(() => (
  //         <SingleLocationDiv>
  //           <h1>Description: {matchNature.description} </h1>
  //           <h2>highlights: {matchNature.highlights}</h2>
  //           <h2>activities: {matchNature.activities}</h2>
  //           <h3>Toilet: {matchNature.toilet.toString()}</h3>
  //         </SingleLocationDiv>
  //       ))}
  //     </section>
  //   )
  // }

  
}

const LocationWrapper= styled.section``

export const SingleLocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
`
