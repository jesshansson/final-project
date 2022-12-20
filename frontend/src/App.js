import React from 'react';
import { GlobalStyle } from 'components/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Header } from 'components/Header';
import { UserProfile } from 'components/UserProfile';
import { Locations } from 'components/Locations';
import { Welcome } from 'components/Welcome';
import { Login } from 'components/Login';
import { NotFound } from 'components/NotFound';
import { Footer } from 'components/Footer';
import { SingleLocation } from 'components/SingleLocation';
import { AboutUs } from 'components/AboutUs';
import user from './reducers/user';
//import { Utloggad } from 'components/utloggad';

const reducer = combineReducers({
  user: user.reducer,
 });
 const store = configureStore({ reducer });

export const App = () => {
  
  return (
   <Provider store={store}>
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/locations/:name' element={<SingleLocation />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
   </Provider>
  );
}

//Frontend: https://brilliant-taffy-d19d1f.netlify.app/
//Backend: https://final-project-fovvngwz2q-lz.a.run.app/

//https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/