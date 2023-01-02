import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from 'reducers/user';
import { Devices } from './GlobalStyles';
import picture from "./picture.jpg"

export const Locations = () => {
  const navigate = useNavigate();
  //LOCAL STORAGE 
  // const accessToken = localStorage.getItem('accessToken');
  // const username = localStorage.getItem('username');

  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('username');
  //   navigate("/");
  // }


  // const accessToken = useSelector((store) => store.user.accessToken);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/utloggad");
  //   }
  // }, [accessToken])

  const [cultureLocation, setCultureLocation] = useState([])
  const [natureLocation, setNatureLocation] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": accessToken
      }
    }


    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => {
        setNatureLocation(data.response.nature)
        setCultureLocation(data.response.culture)
      })
      .then(console.log(natureLocation))
      .catch(error => console.error(error))

  }, []);

  return (
    <>
      <LocationGrid>
        {cultureLocation.map((item) => (
          <GridItem>
            <Picandname>
              <Image src={picture} style={{ width: 150, height: 150 }} alt="picture" />
              <Link
                key={item._id}
                to={`/locations/${item.name}`}>
                <LocationName>{item.name} </LocationName>
              </Link>
            </Picandname>
            <h2>{item.address}</h2>
          </GridItem>
        ))
        }

        {natureLocation.map((item) => (
          <GridItem>
            <Link
              key={item._id}
              to={`/locations/${item.name}`}>
              <h1>Name: {item.name} </h1>
              <h2>Cafe: {item.cafe.toString()}</h2>
              <h3>Map: {item.map}</h3>
            </Link>
          </GridItem>
        ))
        }
      </LocationGrid>
    </>
  )
}


export const LocationGrid = styled.section`
  display: grid;
  grid-gap: 15px;
  margin: 30px;

  @media ${Devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  } 

  @media ${Devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
`
export const Image = styled.img`
border-radius: 50%;

`

export const Picandname = styled.div`
display: flex;
flex-direction: row;
`

export const LocationName = styled.h1`
text-transform: uppercase;
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`