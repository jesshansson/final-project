import React from "react";
import { Devices } from './GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Locations } from "components/Locations";

export const SingleLocation = () => {
  const params = useParams()
  // console.log(params)


  // const { id } = useParams()

  const [details, setDetails] = useState([])

  // export const API_URL = (slug) => `${BASE_URL}/${slug}`

  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
      .then(res => res.json())
      .then(data => setDetails(data.response.culture))
  }, [])

  const match = details.find((location) => location.name === params.name)
  console.log(match)

  return (
    <section>
      {details.map(() => (

        <Culture>
          <h1>Description: {match.description} </h1>
          <h2>Website: {match.website}</h2>
          <h3>entranceFee: {match.entranceFee}</h3>
          {/* <h1>Img: {details.img} </h1> */}
          {/* <h2>highlights: {item.highlights}</h2>
          <h3>Toilet: {item.toilet}</h3> */}
        </Culture>

      ))}
    </section>

  )
}

export const Culture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
`
