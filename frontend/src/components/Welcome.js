import React from "react";
import styled from "styled-components";

export const Welcome = () => {

  return (
    <section>
        <WelcomeText>
          Content
        </WelcomeText>
    </section>
  )
}

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

