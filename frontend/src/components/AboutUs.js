import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { Title } from "./reusable-components/GlobalStyles";
import styled from "styled-components/macro";
import { Description } from "./SingleLocation";
import { DescriptionProfile, SoMeIcon, SoMeIconLink, Headline } from "./reusable-components/GlobalStyles"

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
            <DescriptionProfile>Frontendutvecklare med en förkärlek för gröna växter och pingviner</DescriptionProfile>
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
            <DescriptionProfile>Frontendutvecklare med en förkärlek för gröna växter och pingviner</DescriptionProfile>
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
        <DescriptionProfile>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
             non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </DescriptionProfile>
          <NameTitle>Vi har lånat följande ikoner</NameTitle>
          <ul><a target="_blank" href="https://icons8.com/icon/112792/google-maps-old">Google Maps Old</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></ul>
          <ul><a target="_blank" href="https://icons8.com/icon/112792/google-maps-old">Google Maps Old</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></ul>
          <ul><a target="_blank" href="https://icons8.com/icon/112792/google-maps-old">Google Maps Old</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></ul>
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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 width: 350px;

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
 @media ${Devices.laptop} {
      width: 800px;
    }
    @media ${Devices.desktop} {
    width: 1000px;
    }
`