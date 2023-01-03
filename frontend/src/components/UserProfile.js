import React from "react";
import { useSelector } from "react-redux";
import { PopUp } from "./reusable-components/PopUp";
import styled from "styled-components";
import { Devices, PaigeWrapper } from './reusable-components/GlobalStyles';


export const UserProfile = () => {
  
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