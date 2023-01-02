import React, { useState }  from "react";
import styled from "styled-components";
import { Devices } from './GlobalStyles';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
//import { AuthForm } from "./LoginModal";

export const Welcome = () => {
  const [formMode, setFormMode] = useState('register'); // default form mode is "register"
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (formMode === 'register') {
      dispatch(register(email, password));
    } else {
      dispatch(signIn(email, password));
    }
  }
  return (
    <WelcomeWrapper>
        <WelcomeHeader>
          Välkommen!
        </WelcomeHeader>
        <WelcomeText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante tellus. Aenean sed urna eget magna eleifend laoreet. Aenean faucibus odio nisi. Suspendisse potenti. Morbi nec libero dignissim, vestibulum mi dapibus, efficitur nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nibh et magna fringilla mollis a.
        </WelcomeText>
        <Link to="/modal"> Modal</Link>
        <Link to="/slidepanel">Slidepanel</Link>
        <RegisterWrapper>Bli enkelt medlem genom att fylla i formuläret</RegisterWrapper>
        <RegisterForm>
        <form onSubmit={handleSubmit}>
      <h1>{formMode === 'register' ? 'Registrera' : 'Logga in'}</h1>
      <label htmlFor="username">Namn:</label>
      <input type="username" id="email" value={username} onChange={e => setUsername(e.target.value)} />
      <br />
      <label htmlFor="password">Lösenord:</label>
      <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit">{formMode === 'register' ? 'Registrera' : 'Logga in'}</button>
      <button type="button" onClick={() => setFormMode(formMode === 'register' ? 'signIn' : 'register')}>
        {formMode === 'register' ? 'Logga in' : 'Register'}
      </button>
    </form>
        </RegisterForm>
        <LoginLink>Redan medlem?<Link to ="/login"> Klicka här för att logga in!</Link></LoginLink>
        

    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`
const WelcomeHeader = styled.h1`
  margin-top: 5vh;
  font-size: 30px;
`

const WelcomeText = styled.div`
  margin: 20px;
  width: 70vw;
  //text-align: center;

@media ${Devices.tablet} {
  width: 50vw;
  }
`

const LoginLink = styled.p`
  font-size: 20px;
  margin-top: 20px;
  width: 50vw;
  text-align: center;

&:hover {
    text-decoration: none;
  }
`

const RegisterWrapper = styled.div`
  margin:10px;
  font-size: 20px;
`

const RegisterForm = styled.div`
  width: 20vw;
  height: 20vh;
  padding: 10px`