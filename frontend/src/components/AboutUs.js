import React from "react";
import { Devices } from './reusable-components/GlobalStyles';
import { Title } from "./reusable-components/GlobalStyles";
import styled from "styled-components";
import { Description } from "./SingleLocation";
import { DescriptionProfile, SoMeIcon, SoMeIconLink } from "./reusable-components/GlobalStyles"

export const AboutUs = () => {

  return (
    <>
<OuterWrapper>
<AboutSection>
  <Title>Om oss</Title>
  <DescriptionProfile>Hej! Vi är tre utvecklare som har byggt en sida där vi hoppas kunna 
    främja kultur- och naturlivet. Som en bonus kanske man även kan träffa 
    andra människor med likasinnade intressen. XXX.se är byggd som en del av vår utbildning inom frontend development.  </DescriptionProfile>
</AboutSection>

<CardWrapper>
<Column>
    <Card>
    <AboutUsImage src="https://i.postimg.cc/VLZrvmGg/badson.jpg" alt="Picture of Maria"/>
      <Container>
        <NameTitle>Maria Westling</NameTitle>
        <SmallTitle>Frontend developer</SmallTitle>
        <DescriptionProfile>info info lorem ipsum ipsum lorem.</DescriptionProfile>
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
    </Column>

    <Column>
    <Card>
    <AboutUsImage src="https://i.postimg.cc/tJSTsN5J/spenat.jpg" alt="Picture of Jessica"/>
      <Container>
      <NameTitle>Jessica Hansson</NameTitle>
        <SmallTitle>Frontend developer</SmallTitle>
        <DescriptionProfile>info info lorem ipsum ipsum lorem.</DescriptionProfile>
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
    </Column>

    <Column>
    <Card>
    <AboutUsImage src="https://i.postimg.cc/TPV3V69Z/hejhopp.jpg" alt="Picture of Cecilia"/>
      <Container>
      <NameTitle>Cecilia Rådén</NameTitle>
        <SmallTitle>Frontend developer</SmallTitle>
        <DescriptionProfile>info info lorem ipsum ipsum lorem.</DescriptionProfile>
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
    </Column>
    </CardWrapper>
    </OuterWrapper>
</>
  )
}


const OuterWrapper = styled.section`
 width: 100%;
 display: flex;
align-items: center;
 flex-direction: column;
`

const CardWrapper = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
    *, *:before, *:after {
      box-sizing: inherit;
    }

    @media ${Devices.laptop} {
      flex-direction: row; 
      justify-content: space-around
    }
    @media ${Devices.desktop} {
     flex-direction: row;
     justify-content: space-evenly
    }
`

const Column = styled.div`
 
  width: 80%;
  margin-bottom: 16px;
  padding: 0 8px;

  @media ${Devices.laptop} {
    width: 50%;
    }
    @media ${Devices.desktop} {
      width: 20%;
    }
`

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
margin: 8px;
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
padding: 20px;
`
const SmallTitle = styled.p`
 color: #ECB390;
`

const NameTitle = styled.h2`
font-size: 24px;
`

const AboutUsImage = styled.img`
 width: 100%;
`

const SoMeWrapper = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
` 
