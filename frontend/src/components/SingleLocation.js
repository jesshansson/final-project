import React from "react";
import { Devices } from './GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const SingleLocation = () => {
  const params = useParams()
  // console.log(params)
  // const { id } = useParams()

  const [detailsCulture, setDetailsCulture] = useState([])
  const [detailsNature, setDetailsNature] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
      .then(res => res.json())
      .then(data => setDetailsCulture(data.response.culture))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => setDetailsNature(data.response.nature))
      .catch(error => console.error(error))
  }, [])

  const matchCulture = detailsCulture.find((location) => location.name === params.name)
  const matchNature = detailsNature.find((location) => location.name === params.name)
  console.log(matchCulture)
  console.log(matchNature)

  if (matchCulture) {
    return (
      <section>
        {detailsCulture.map(() => (
          <SingleLocationDiv>
            <h1>Description: {matchCulture.description} </h1>
            <h2>Website: {matchCulture.website}</h2>
            <h3>entranceFee: {matchCulture.entranceFee}</h3>
            {/* <h1>Img: {details.img} </h1> */}
            {/* <h2>highlights: {item.highlights}</h2>
              <h3>Toilet: {item.toilet}</h3> */}
          </SingleLocationDiv>
        ))}
      </section>
    )
  } else if (matchNature) {
    return (
      <section>
        {detailsNature.map(() => (
          <SingleLocationDiv>
            <h1>Description: {matchNature.description} </h1>
            <h2>Website: {matchNature.website}</h2>
            <h2>highlights: {matchNature.highlights}</h2>
            <h3>Toilet: {matchNature.toilet}</h3>
          </SingleLocationDiv>
        ))}
      </section>

    )

  }



}

export const SingleLocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
`
