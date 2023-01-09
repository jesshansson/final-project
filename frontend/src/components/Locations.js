import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from 'reducers/user';
import { Devices, PaigeWrapper } from './reusable-components/GlobalStyles';
import SlidingPane from "react-sliding-pane";
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

    <LocationsWrapper>

      <Headline>För dig som gillar kultur</Headline>
      <LocationGrid>
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
      <Headline>För dig som gillar natur</Headline>
      <LocationGrid>
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
    </LocationsWrapper>
  )
}

const LocationsWrapper = styled.section`
 width: 100vw;
 display: flex;
  align-items: center;
 flex-direction: column;
`


const LocationGrid = styled.section`
  display: grid;
  grid-gap: 30px;

  @media ${Devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 10px 30px;
  } 

  @media ${Devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const GridItem = styled.div`
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 20px 0px;
  margin: 10px 60px;
  background-color: #ECB390;
  border-radius: 15px;
  align-items: center;
  border: 3px solid #e8894f;
  width: 270px;

  @media ${Devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin:  15px;
    padding: 20px 10px;
    width: 300px;
  } 

  @media ${Devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
    margin: 20px 20px;
    padding: 30px 20px;
    width: 350px;
  }

`
export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid #FCF8E8;
  margin: 10px 0px;
`

export const LocationName = styled.h2`
padding-top: 10px;
font-family: 'Comfortaa', cursive;
font-size: 20px;
text-transform: uppercase;
text-align: center;
//letter-spacing: 15px 0px;

@media ${Devices.tablet} {
  font-size: 22px;
  } 

  @media ${Devices.laptop} {
    
  }
`

export const Headline = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 25px;
  grid-column: 1 / 4;
  grid-row: 1;
  margin: 20px;

  @media ${Devices.tablet} {
  font-size: 30px;
  } 

  @media ${Devices.laptop} {
    font-size: 35px;
  }

`
