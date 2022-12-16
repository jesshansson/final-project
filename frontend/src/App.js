import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  // fetch("http://localhost:8080/games")
  //   .then(res => res.json())
  //   .then(data => console.log(data))

    fetch("http://localhost:8080/locations")
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<UserProfile/>}></Route> /* Eller ska denna endast vara /? */
      <Route path='/locations' element={<Locations/>}></Route> 
      <Route path='/singlelocation' element={<SingleLocation/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}