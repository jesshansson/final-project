import React from "react";
import { Devices } from './GlobalStyles';
import { Title } from "./GlobalStyles";

export const AboutUs = () => {

  return (
    <>
<div class="about-section">
  <h1>Om oss</h1>
  <p>Hej! Vi är tre utvecklare som har byggt en sida där vi hoppas kunna 
    främja kultur- och naturlivet. Som en bonus kanske man även kan träffa 
    andra människor med likasinnade intressen. 
    Hej! Vi är tre utvecklare som har byggt en sida där vi hoppas kunna 
    främja kultur- och naturlivet. Som en bonus kanske man även kan träffa 
    andra människor med likasinnade intressen. </p>
</div>

<div class="row">
<div class="column">
    <div class="card">
      <img src="https://pixabay.com/sv/photos/kvinna-mode-sk%c3%b6nhet-glamour-sk%c3%b6n-1274056/" />
      <div class="container">
        <h2>Maria Westling</h2>
        <p class="title">Frontend developer</p>
        <p>info info lorem ipsum ipsum lorem.</p>
        <p>mailadress@example.com</p>
        <a href="https://github.com/CeciliaMichele">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ceciliaraden/">
            <i className="fa-brands fa-linkedin-in" />
          </a>
      </div>
    </div>
    </div>

    <div class="column">
    <div class="card">
    <img src="https://pixabay.com/sv/photos/kvinna-mode-sk%c3%b6nhet-glamour-sk%c3%b6n-1274056/" />
      <div class="container">
      <h2>Jessica Hansson</h2>
        <p class="title">Frontend developer</p>
        <p>info info lorem ipsum ipsum lorem.</p>
        <p>mailadress@example.com</p>
        <a href="https://github.com/CeciliaMichele">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ceciliaraden/">
            <i className="fa-brands fa-linkedin-in" />
          </a>
      </div>
    </div>
    </div>

    <div class="column">
    <div class="card">
    <img src="https://pixabay.com/sv/photos/kvinna-mode-sk%c3%b6nhet-glamour-sk%c3%b6n-1274056/" />
      <div class="container">
      <h2>Cecilia Rådén</h2>
        <p class="title">Frontend developer</p>
        <p>info info lorem ipsum ipsum lorem.</p>
        <p>mailadress@example.com</p>
        <a href="https://github.com/CeciliaMichele">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ceciliaraden/">
            <i className="fa-brands fa-linkedin-in" />
          </a>
      </div>
    </div>
    </div>
    </div>
</>
  )
}