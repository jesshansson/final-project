import React from "react";
import { Devices } from './GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Locations } from "components/Locations";

export const SingleLocation = () => {

  const { id } = useParams()

  const [details, setDetails] = useState([])

  // export const API_URL = (slug) => `${BASE_URL}/${slug}`

  useEffect(() => {
    fetch(`http://localhost:8080/locations/${id}`)
      .then(res => res.json())
      .then(data => console.log(data.response.culture))
  }, [])

  return (
  <section>

  <>
  Hellog
  </>
    {/* {details.map((item) => ( 
  
    <Culture>
      <h1>Description: {item.description} </h1>
      <h2>Website: {item.website}</h2>
      <h3>entranceFee: {item.entranceFee}</h3>
      <h1>Img: {details.img} </h1>
      <h2>highlights: {details.highlights}</h2>
      <h3>Toilet: {details.toilet}</h3>
    </Culture>
    
    ))} */}
  </section>  

)}

export const Culture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
`
