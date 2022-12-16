import React from "react";
import styled from "styled-components";

export const Login = () => {

  return (
    <LoginWrapper>
      <LoginBox>
        Login
      </LoginBox>
      </LoginWrapper>
)}

export const LoginBox = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  box-shadow: 0px 0px 7px 0px #888888;
  padding: 20px;
  background-color: #FEF5ED;
  min-height: 35vh;

`
const LoginWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;`