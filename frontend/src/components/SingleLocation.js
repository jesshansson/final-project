import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { API_URL } from "utils/utils";
import { Link } from 'react-router-dom';

export const SingleLocation = () => {
  const params = useParams()
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
      <section>
        <Link to="/locations"> ↩ Tillbaka </Link>
        <LocationWrapper>
          <SingleLocationDiv>
            <h1>Description: {matchCulture.description} </h1>
            <h2>Website: {matchCulture.website}</h2>
            <h3>entranceFee: {matchCulture.entranceFee}</h3>
          </SingleLocationDiv>
        </LocationWrapper>

      </section>
    )
  } else if (matchNature) {
    return (
      <section>

        <SingleLocationDiv>
          <h1>Description: {matchNature.description} </h1>
          <h2>highlights: {matchNature.highlights}</h2>
          <h2>activities: {matchNature.activities}</h2>
          <h3>Toilet: {matchNature.toilet.toString()}</h3>
        </SingleLocationDiv>
      </section>
    )
  }
}

const LocationWrapper = styled.section``

export const SingleLocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
`


