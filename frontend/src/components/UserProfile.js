import React from "react";
import styled from "styled-components";
import { Devices } from './GlobalStyles';


export const UserProfile = () => {

  return (
    <ProfileWrapper>
      <h1>Profile</h1>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.section`

`

/* <Button
    onClick={() => {
    if (item.user._id === userId) {
    navigate(`/userprofile/${userId}`);
    } else {
    navigate(`userprofile/${item.user._id}/visit`);
    }
    }}
    size="small"
    sx={{
    fontFamily: "secondary.fontFamily",
    }}
> */