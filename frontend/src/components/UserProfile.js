import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PopUp } from "./reusable-components/PopUp";
import styled, { ThemeConsumer } from "styled-components";
import { Devices, PaigeWrapper, DescriptionProfile, SoMeIcon, SoMeIconLink } from './reusable-components/GlobalStyles';
import { UserModal } from './reusable-components/UserModal';

export const UserProfile = () => {
  const [updateUserProfile, setUpdateUserProfile] = useState([])
  const [userDetails, setUserDetails] = useState([])
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const name = useSelector((store) => store.user.name);
  const email = useSelector((store) => store.user.email);
  const age = useSelector((store) => store.user.age)
  const presentation = useSelector((store) => store.user.presentation)
  const facebook = useSelector((store) => store.user.facebook)
  const instagram = useSelector((store) => store.user.instagram)
  const navigate = useNavigate();
  const { id } = useParams()
  console.log("id", id)

  useEffect(() => {
    if (!accessToken) {
      navigate("/unauthorized");
    }
  }, [accessToken])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": accessToken
      }
    }

    fetch(`https://final-project-m2dbj6puqa-lz.a.run.app/profile/${id}`, options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
  }, [])


  return (
    <>
    <UserModalButton>
      <UserModal accessToken={accessToken} />
      </UserModalButton>
      <ProfileWrapper>
      
      <Card>
        <img src="https://th.bing.com/th/id/OIP.IB0XUg8PV5FGxOf0WWDdOQHaHa?pid=ImgDet&rs=1" alt="John" style={{ width: "80%" }} />
        <h1>{name}</h1>
        <h2>{username}</h2>
        <Age>{age} år</Age>
        <DescriptionProfile>{presentation}</DescriptionProfile>
        <SoMeWrapper>
          <SoMeIcon href={`https://instagram.com/${instagram}`}>
            <SoMeIconLink className="fa fa-instagram" />
          </SoMeIcon>
          <SoMeIcon href={facebook}>
            <SoMeIconLink className="fa fa-facebook" />
          </SoMeIcon>
        </SoMeWrapper>
        <p>
          <a href={`mailto:${email}`}>
            <ContactButton>Maila mig!</ContactButton>
          </a>
        </p>
        <p>{email}</p>
      </Card >
      
    </ProfileWrapper >
    </>
  );
};

const UserModalButton = styled.div`
 display: flex;
 justify-content: flex-end;
 margin-right: 30px;
 `
 

const ProfileWrapper = styled.section`
  padding-top: 30px;
  color: black;
 
  flex-direction: column`

const SoMeWrapper = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
`

const Card = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 90%;
  margin: auto;
  text-align: center;
  @media ${Devices.tablet} {
  max-width: 70%;
    }
    @media ${Devices.laptop} {
      max-width: 50%;
    }
    @media ${Devices.desktop} {
      max-width: 10%;
    }
`
const Age = styled.p`
  color: #ECB390;
  font-size: 18px;
`

const ContactButton = styled.button`
   border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #94B49F;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  :hover {
    opacity: 0.7;
  }
`


//Använda popup modal för att redigera sin profil?

