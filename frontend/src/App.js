import React from 'react';
import { GlobalStyle } from 'components/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';
import { UserProfile } from 'components/UserProfile';
import { Locations } from 'components/Locations';
import { Welcome } from 'components/Welcome';
import { Login } from 'components/Login';
import { NotFound } from 'components/NotFound';
import { Footer } from 'components/Footer';

export const App = () => {
    fetch("http://localhost:8080/locations")
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Welcome/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<UserProfile/>}></Route>
      <Route path='/locations' element={<Locations/>}></Route> 
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}