import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import styled from "styled-components/macro";
import { SoMeIcon, SoMeIconLink, Headline } from "./reusable-components/GlobalStyles"

export const AboutUs = () => {

  return (
    <AboutUsWrapper>
      <AboutSection>
        <Headline>Om oss</Headline>
        <DescriptionProfile>Hej! Vi är tre utvecklare som har byggt en sida där vi hoppas kunna
          främja kultur- och naturlivet. Som en bonus kanske man även kan träffa
          andra människor med likasinnade intressen. Kulturligtvis är byggd som en del av vår utbildning inom frontend development.  </DescriptionProfile>
      </AboutSection>

      <CardWrapper>
        <Card>
          <AboutUsImage src="https://i.postimg.cc/sx2jt19K/maria.jpg" alt="Picture of Maria" width={300} height={300} />
          <Container>
            <NameTitle>Maria Westling</NameTitle>
            <SmallTitle>Frontend developer</SmallTitle>
            <DescriptionProfile>Frontendutvecklare som trivs bäst med sin stickning och ett glas rött</DescriptionProfile>
            <SoMeWrapper>
              <SoMeIcon href="https://github.com/marwebdesign">
                <SoMeIconLink className="fa-brands fa-github" />
              </SoMeIcon>
              <SoMeIcon href="https://www.linkedin.com/in/maria-westling-a6327315b/">
                <SoMeIconLink className="fa-brands fa-linkedin-in" />
              </SoMeIcon>
              <SoMeIcon href="mailto:maria.westling@gmail.com">
                <SoMeIconLink class='far fa-envelope-open' />
              </SoMeIcon>
            </SoMeWrapper>
          </Container>
        </Card>

        <Card>
          <AboutUsImage src="https://i.postimg.cc/d1zVbJ3y/jessica-hansson.png" alt="Picture of Jessica" width={300} height={300} />
          <Container>
            <NameTitle>Jessica Hansson</NameTitle>
            <SmallTitle>Frontend developer</SmallTitle>
            <DescriptionProfile>Frontendutvecklare som vill göra världen lite bättre genom sitt kodande</DescriptionProfile>
            <SoMeWrapper>
              <SoMeIcon href="https://github.com/jesshansson">
                <SoMeIconLink className="fa-brands fa-github" />
              </SoMeIcon>
              <SoMeIcon href="https://www.linkedin.com/in/jesshansson/">
                <SoMeIconLink className="fa-brands fa-linkedin-in" />
              </SoMeIcon>
              <SoMeIcon href="mailto:jessica.hansson@hotmail.se">
                <SoMeIconLink class='far fa-envelope-open' />
              </SoMeIcon>
            </SoMeWrapper>
          </Container>
        </Card>

        <Card>
          <AboutUsImage src="https://i.postimg.cc/Nfd6YX0W/cicci.jpg" alt="Picture of Cecilia" width={300} height={300} />
          <Container>
            <NameTitle>Cecilia Rådén</NameTitle>
            <SmallTitle>Frontend developer</SmallTitle>
            <DescriptionProfile>Frontendutvecklare med en förkärlek för gröna växter och pingviner</DescriptionProfile>
            <SoMeWrapper>
              <SoMeIcon href="https://github.com/CeciliaMichele">
                <SoMeIconLink className="fa-brands fa-github" />
              </SoMeIcon>
              <SoMeIcon href="https://www.linkedin.com/in/ceciliaraden/">
                <SoMeIconLink className="fa-brands fa-linkedin-in" />
              </SoMeIcon>
              <SoMeIcon href="mailto:cecilia.raden@gmail.com">
                <SoMeIconLink class='far fa-envelope-open' />
              </SoMeIcon>
            </SoMeWrapper>
          </Container>
        </Card>
      </CardWrapper>
      <AboutSite>
        <Headline>Om Kulturligtvis</Headline>
        <DescriptionProfile>Kulturligtvis publicerades i januari 2023 som en del av Technigos 
          utbildning Web Development. För vår backend har vi använt Node.js, MongoDB och Google 
          Cloud som server. För vår frontend har vi valt att arbeta med React, Redux, Styled Components samt JSX.
          </DescriptionProfile>
          <IconTitle>Vi har lånat följande ikoner:</IconTitle>
          <a target="_blank" href="https://icons8.com/icon/112792/google-maps-old">Google Maps Old</a>,  
          <a target="_blank" href="https://icons8.com/icon/6c5aLYi4Ayel/physical-gallery"> Physical Gallery</a>, 
          <a target="_blank" href="https://icons8.com/icon/h5VJ2aUGETKL/theatre-stage"> Theatre Stage</a>,
          <a target="_blank" href="https://icons8.com/icon/13483/theatre-mask"> Theatre Mask</a>,
          <a target="_blank" href="https://icons8.com/icon/JkMPhlUr4eQR/lake"> Lake</a>, 
          <a target="_blank" href="https://icons8.com/icon/17605/museum"> Museum  </a>
            icons by  <a target="_blank" href="https://icons8.com"> Icons8</a>
        </AboutSite>
    </AboutUsWrapper>
  )
}


const AboutUsWrapper = styled.section`
  background: linear-gradient(140deg, #FCF8E8 60%, #ECB390 60%);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const DescriptionProfile = styled.div`
  font-size: 18px;
  text-align: center;

  @media ${Devices.laptop} {
    font-size: 20px;
  }

  @media ${Devices.desktop} {
    font-size: 25px;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin-bottom: 40px;

  @media ${Devices.laptop} {
    flex-direction: row; 
    width: 300px;
  }
  @media ${Devices.desktop} {
    flex-direction: row;
    width: 200px;
  }
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  display: flex; 
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const AboutSection = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  width: 80%;

  @media ${Devices.laptop} {
    width: 50%;
  }
  @media ${Devices.desktop} {
    width: 20%;
  }
`

const Container = styled.div`
  background-color: #FCF8E8;
  padding: 20px;
`
const SmallTitle = styled.p`
 color: #ECB390;
 font-size: 17px;
 @media ${Devices.laptop} {
    font-size: 20px;
  }
  @media ${Devices.desktop} {
      font-size: 25px;
  }
`

const NameTitle = styled.h2`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;

  @media ${Devices.laptop} {
    font-size: 30px;
    }
  @media ${Devices.desktop} {
    font-size: 36px;
    }
`

const AboutUsImage = styled.img`
  object-fit: cover;
`

const SoMeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
` 
const AboutSite = styled.section`
 width: 350px;
 margin-bottom: 30px;
 @media ${Devices.laptop} {
      width: 800px;
    }
    @media ${Devices.desktop} {
    width: 1000px;
    }
`

const IconTitle = styled.p`
font-size: 17px;
margin-bottom: 5px;
margin-top: 10px;`