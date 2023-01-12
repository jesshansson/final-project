import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PopUp } from "./reusable-components/PopUp";
import styled, { ThemeConsumer } from "styled-components";
import { Devices } from './reusable-components/GlobalStyles';
import { UserModal } from './reusable-components/UserModal';
import user from 'reducers/user';

export const UserProfile = () => {
  const [updateUserProfile, setUpdateUserProfile] = useState([])
  const [userDetails, setUserDetails] = useState({})
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
  const dispatch = useDispatch();
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
          batch(() => {
            dispatch(user.actions.setBookmark(data.response.bookmark));
            dispatch(user.actions.setName(data.response.name));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setAge(data.response.age));
            dispatch(user.actions.setPresentation(data.response.presentation));
            dispatch(user.actions.setInstagram(data.response.instagram));
            dispatch(user.actions.setFacebook(data.response.facebook));
            dispatch(user.actions.setError(null));
          });
        console.log(userDetails);
      })
      .catch(error => console.error(error))
  }, [])


  return (
    <>

      <ProfileWrapper>
      
      <Card>
        <UserModalButton>
          <UserModal accessToken={accessToken} userDetails={userDetails} />
        </UserModalButton>
        <ProfileImg src="https://th.bing.com/th/id/OIP.IB0XUg8PV5FGxOf0WWDdOQHaHa?pid=ImgDet&rs=1" alt="John"/>
        <h1>{name}</h1>
        <h2>{username}</h2>
        <Age>{age} år</Age>
        <DescriptionProfile2>{presentation}  
        </DescriptionProfile2>
        <SoMeWrapperProfile>
          <SoMeIconProfile href={`https://instagram.com/${instagram}`}>
            <SoMeIconLinkProfile className="fa fa-instagram" />
          </SoMeIconProfile>
          <SoMeIconProfile href={facebook}>
            <SoMeIconLinkProfile className="fa fa-facebook" />
          </SoMeIconProfile>
        </SoMeWrapperProfile>
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
 margin-right: 15px;
`

const ProfileImg = styled.img`
  width: 30vw;
  height: auto;
  margin: 20px;
  border-radius: 50%;
  border: 3px solid #ecb390;

  @media ${Devices.tablet} {
  width: 25vw;
    }
  @media ${Devices.laptop} {
    width: 20vw;
    }
`

const ProfileWrapper = styled.section`
  padding: 35px 0px;
  flex-direction: column;
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
`
const Age = styled.p`
  color: #ecb390;
  font-weight: 600;
  font-size: 18px;

  @media ${Devices.tablet} {
    font-size: 20px;
  }
`

export const DescriptionProfile2 = styled.p`
  font-size: 18px;
  margin: 30px;

  @media ${Devices.tablet} {
    margin: 35px;
  }
  @media ${Devices.laptop} {
    margin: 30px 80px;
  }
`
export const SoMeWrapperProfile = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
  
  @media ${Devices.tablet} {
    margin-top: 45px;
  }
`

export const SoMeIconLinkProfile = styled.i`
  display: flex;
  margin: 5px;
  font-size: 30px;
  color: #ECB390;
  padding: 0px 10px;
  

  @media ${Devices.tablet} {
    font-size: 30px;
    padding: 0px 15px;
  }

  @media ${Devices.laptop} {
    font-size: 40px;
    margin-bottom: 20px;
  }

`

export const SoMeIconProfile = styled.a`
  text-decoration: none;
  font-size: 22px;
  color: black;

  :hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
` 

export const ContactButton = styled.button`
  border: none;
  outline: 0;
  margin-top: 15px;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #94B49F;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 30px;
  font-family: 'Caveat', cursive;

  :hover {
    opacity: 0.7;
  }

  @media ${Devices.tablet} {
    padding: 15px;
  }

  @media ${Devices.laptop} {
    font-size: 40px;
    padding: 20px;
  }

`


