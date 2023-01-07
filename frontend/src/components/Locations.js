import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from 'reducers/user';
import { Devices } from './reusable-components/GlobalStyles';
import SlidingPanel from "react-sliding-side-panel";
import picture from "./picture.jpg"

export const Locations = () => {
  const navigate = useNavigate();

  const [cultureLocation, setCultureLocation] = useState([])
  const [natureLocation, setNatureLocation] = useState([])
  const [openPanel, setOpenPanel] = useState(false)

  // onPanelButtonClick = () => {

  // }

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": accessToken
      }
    }

    fetch("https://final-project-m2dbj6puqa-lz.a.run.app/locations")
      .then(res => res.json())
      .then(data => {
        setNatureLocation(data.response.nature)
        setCultureLocation(data.response.culture)
        console.log(data.response.culture)
        console.log(data.response.nature)

      })
      .catch(error => console.error(error))

  }, []);

  return (
    <>
      <LocationGrid>
        <Headline>För dig som gillar kultur</Headline>
        {cultureLocation.map((item) => (
          <GridItem>
            <Image src={item.img} style={{ width: 150, height: 150 }} alt="picture" />
            {/* <button onClick={() => setOpenPanel(true)}>
              <LocationName>{item.name} </LocationName>
            </button> */}
            <Link
              key={item._id}
              to={`/locations/${item._id}`}>
              {/* <LocationName>{item.name} </LocationName> */}
              <LocationName>{item.name} </LocationName>
            </Link>
            {/* <SlidingPanel
              type={'right'}
              isOpen={openPanel}
              size={30}>
              <div>
                <button onClick={() => setOpenPanel(false)}>close</button>
              </div>
            </SlidingPanel> */}

          </GridItem>
        ))
        }
      </LocationGrid>
      <LocationGrid>
        <Headline>För dig som gillar natur</Headline>
        {natureLocation.map((item) => (
          <GridItem>
            <Image src={item.img} style={{ width: 150, height: 150 }} alt="picture" />
            <Link
              key={item._id}
              to={`/locations/${item._id}`}>
              <LocationName>{item.name}</LocationName>
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
  grid-gap: 30px;

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
  justify-content: space-between;
  padding: 30px;
  margin: 10px;
  background-color: #ECB390;
  border-radius: 5%;
  align-items: center;
  border: 3px solid #e8894f;

`
export const Image = styled.img`
border-radius: 50%;
border: 2px solid #FCF8E8;
margin: 10px 0px;
`

export const LocationName = styled.h2`
padding-top: 10px;
font-family: 'Comfortaa', cursive;
font-size: 25px;
text-transform: uppercase;
text-align: center;
`

export const Headline = styled.h1`
font-family: 'Montserrat', sans-serif;
text-align: center;
font-size: 40px;
grid-column: 1 / 4;
grid-row: 1;
margin-top: 15px;
`

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