import React from "react";
import styled from "styled-components";
import { Devices } from './GlobalStyles';

export const Welcome = () => {

  return (
    <WelcomeWrapper>
        <WelcomeText>
          Välkommen!
        </WelcomeText>
    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WelcomeText = styled.div``

