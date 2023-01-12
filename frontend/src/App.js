import React from 'react';
import { GlobalStyle } from 'components/reusable-components/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore, createStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { UserProfile } from 'components/UserProfile';
import { Locations } from 'components/Locations';
import { Welcome } from 'components/Welcome';
import { Login } from 'components/Login';
import { NotFound } from 'components/NotFound';
import { Footer } from 'components/Footer';
import { SingleLocation } from 'components/SingleLocation';
import { AboutUs } from 'components/AboutUs';
import { PopUp } from 'components/reusable-components/PopUp';
import user from './reducers/user';
import { SlidePanel } from 'components/SlidePanel';
import { NotLoggedIn } from 'components/NotLoggedIn';
import { Navbar } from 'components/Navbar';
import { Modal } from 'bootstrap';
import { UserModal } from 'components/reusable-components/UserModal';
import thunkMiddleware from "redux-thunk";

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

          <Route path='/modal' element={<PopUp />} />
          <Route path='/slidepanel' element={<SlidePanel />} />
          <Route path='/modal2' element={<UserModal />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

//Frontend: https://brilliant-taffy-d19d1f.netlify.app/
//Backend: https://final-project-m2dbj6puqa-lz.a.run.app/

//https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/

//<Route path='/login' element={<Login />} />