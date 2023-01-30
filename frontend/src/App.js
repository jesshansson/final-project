import React from 'react';
import user from './reducers/user';
import { GlobalStyle } from 'components/reusable-components/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { UserProfile } from 'components/UserProfile';
import { Locations } from 'components/Locations';
import { Welcome } from 'components/Welcome';
import { Login } from 'components/Login';
import { NotFound } from 'components/NotFound';
import { SingleLocation } from 'components/SingleLocation';
import { AboutUs } from 'components/AboutUs';
import { NotLoggedIn } from 'components/NotLoggedIn';
import { Navbar } from 'components/Navbar';
import { VisitUserProfile } from 'components/VisitUserProfile';

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>

        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/profile/:id' element={<UserProfile />} />
          <Route path="/profile/:id/visit" element={<VisitUserProfile />}/>
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/:id' element={<SingleLocation />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/unauthorized' element={< NotLoggedIn />} />
          <Route path={"/register"} element={
            <Login
              siteType="register"
              siteHeadline="Välkommen!"
              submitBtn="Registrera" />} />
          <Route path={"/login"} element={
            <Login
              siteType="login"
              siteHeadline="Välkommen tillbaka!"
              submitBtn="Logga in" />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
        
      </BrowserRouter>
    </Provider>
  );
}
