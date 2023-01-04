import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PopUp } from "./reusable-components/PopUp";
import styled from "styled-components";
import { Devices, PaigeWrapper } from './reusable-components/GlobalStyles';


export const UserProfile = () => {

  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
     navigate("/unauthorized");
    }
  }, [accessToken])

  const username = useSelector((store) => store.user.username);
  
  return (
    <PaigeWrapper>
      
      Hej {username}!
  
    </PaigeWrapper>
  );
};

const ProfileWrapper = styled.section`

`

//Använda popup modal för att redigera sin profil?