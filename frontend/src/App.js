import React from 'react';

export const App = () => {
  // fetch("http://localhost:8080/games")
  //   .then(res => res.json())
  //   .then(data => console.log(data))

    fetch("http://localhost:8080/locations")
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <div>
      Find me in src/app.js!
    </div>
  );
}
