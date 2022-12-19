import React from "react";
import { Devices } from './GlobalStyles';
import { useState, useEffect } from "react";
import styled from "styled-components";

export const SingleLocation = () => {

  const [details, setDetails] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8080/locations:id`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])

  return (
<section>
    {details.map((item) => (
  
    <Culture>
    <h1>Description: {item.description} </h1>
    <h2>Website: {item.website}</h2>
    <h3>entranceFee: {item.entranceFee}</h3>
    <h1>Img: {details.img} </h1>
    <h2>highlights: {details.highlights}</h2>
    <h3>Toilet: {details.toilet}</h3>
  </Culture>
    
    ))}
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
