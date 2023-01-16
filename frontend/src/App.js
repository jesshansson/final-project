import React from 'react';
import user from './reducers/user';
import thunkMiddleware from "redux-thunk";
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

const reducer = combineReducers({
  user: user.reducer,
});
// const persistedStateJSON = localStorage.getItem("userReduxState");
// let persistedState = {};

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON);

//   compose;

// Ska in i store  persistedState
// store.subscribe(() => {
//   localStorage.setItem("userReduxState", JSON.stringify(store.getState()));
// });

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

//Frontend: https://kulturligtvis.netlify.app/
//Backend: https://final-project-m2dbj6puqa-lz.a.run.app/
