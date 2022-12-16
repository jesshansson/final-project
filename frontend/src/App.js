import React from 'react';
<<<<<<< HEAD
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
import { Utloggad } from 'components/utloggad';

const reducer = combineReducers({
  user: user.reducer,
});
const store = configureStore({reducer});

export const App = () => {
    fetch("https://final-project-fovvngwz2q-lz.a.run.app/locations")
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <Provider store={store}>
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Welcome/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/profile' element={<UserProfile/>} />
      <Route path='/locations' element={<Locations/>} />
      <Route path='/location' element={<SingleLocation/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/utloggad' element={<Utloggad/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </Provider>
=======
import { Locations } from 'components/Locations';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  // fetch("http://localhost:8080/games")
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  // fetch("http://localhost:8080/locations")
  // .then(res => res.json())
  // .then(data => console.log(data))

  return (
    <>
      <Locations />
    </>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path='/login' element={<Login/>}></Route>
    //     <Route path='/profile' element={<UserProfile/>}></Route> /* Eller ska denna endast vara /? */
    //     <Route path='/locations' element={<Locations/>}></Route> 
    //     <Route path='/singlelocation' element={<SingleLocation/>}></Route>
    //     <Route path='/about' element={<AboutUs/>}></Route>
    //     <Route path='*' element={<NotFound/>}></Route>
    //   </Routes>
    // </BrowserRouter>
>>>>>>> 2998924 (trying fetches)
  );
}

//Frontend: https://brilliant-taffy-d19d1f.netlify.app/
//Backend: https://final-project-fovvngwz2q-lz.a.run.app/