import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from '../utils/utils';
import user from '../reducers/user';
import styled from "styled-components";
import { H1 } from './reusable-components/GlobalStyles';
import { Link } from 'react-router-dom';

export const Login = ({ siteHeadline, siteType, submitBtn }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.id)

  useEffect(() => {
    if (accessToken) {
      navigate(`/profile/${userId}`);
    }
  }, [accessToken])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, name: name, password: password })
    }
    fetch(API_URL(siteType), options)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setName(data.response.name));
            dispatch(user.actions.setId(data.response.id))
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
          const persistedStateJSON = {
            username: data.response.username,
            name: data.response.name,
            id: data.response.id,
            accessToken: data.response.accessToken
          }
          localStorage.setItem("userReduxState", JSON.stringify(persistedStateJSON));
        } else {
          batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setName(null));
            dispatch(user.actions.setId(null))
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
            setLoginError(data.response)
          });
        }
      })
  }
  return (
    <>
      <LoginWrapper>
        <LoginBox>
          <H1>{siteHeadline}</H1>
          <FormSubmit onSubmit={onFormSubmit}>
            <Label htmlFor="username">Användarnamn: </Label>
            <Input
              type="text"
              id="username"
              value={username}
              required
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
            {siteType === "register" && (
              <>
                <Label htmlFor="name">Namn: </Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  required
                  placeholder=""
                  onChange={(e) => setName(e.target.value)} />
              </>
            )}

            <Label htmlFor="password">Lösenord: </Label>
            <Input
              type="password"
              id="password"
              value={password}
              required
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loginError !== '' && (
              <ErrorText>{loginError} </ErrorText>
            )}
            <Button type="submit">{submitBtn}</Button>
          </FormSubmit>
          {siteType === "login" && (
            <CenterFlexDiv>
              <p>Inte medlem ännu?</p>
              <Link to="/register">Registrera nytt konto här</Link>
            </CenterFlexDiv>)
          }
          {siteType === "register" && (
            <CenterFlexDiv>
              <p>Redan medlem?</p>
              <Link to="/login">Logga in här </Link>
            </CenterFlexDiv>)
          }

        </LoginBox>
      </LoginWrapper>
    </>
  )
}


const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(140deg, #FCF8E8 60%, #ECB390 60%);
  height: 100vh;
`

const CenterFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginBox = styled.div`
  min-width: 45vw;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  box-shadow: 0px 0px 7px 0px #888888;
  padding: 20px;
  background-color: #FEF5ED;
  max-height: 80vh;
`
const ErrorText = styled.p`
  margin-top: 5px;
  color: red;
`
const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

const Label = styled.label`
  font-weight: 600;
`

const Input = styled.input`
  border-radius: 3px;
  padding: 2px;
  margin: 5px;
  transition: ease-out 0.2s;
  border: 1px solid black;
  min-width: 50vw;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 800px) {
  min-width: 20vw;
  padding: 7px;
  }
`

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border: 0px;
  transition: ease-out 0.2s;
  background-color: #ECB390;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px #888888;
  font-size: 17px;
  font-weight: 600;
  text-align: center;

&:hover {
    transform: scale(1.05);
  }

  @media (min-width: 800px) {
    margin: 30px;
    font-size:17px;
  }
`
