import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from 'reducers/user';
import { Devices } from './GlobalStyles';

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
      .then(data => setCultureLocation(data.response.culture))
      .then(console.log(cultureLocation))
      .catch(error => console.error(error))

    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => setNatureLocation(data.response.nature))
      .then(console.log(natureLocation))
      .catch(error => console.error(error))

  }, []);

  return (
    <>
      <LocationGrid>

        {cultureLocation.map((item) => (

          <GridItem>
            <Link
              key={item._id}
              to={`/locations/${item.name}`}>
              <h1>Name: {item.name} </h1>
              <h2>Adress: {item.address}</h2>
              <h3>Map: {item.map}</h3>
            </Link>
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  margin: 30px;
`
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: #ECB390;
  align-items: center;
  `
