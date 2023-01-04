import React from "react";
import { Link } from "react-router-dom";
import { PaigeWrapper } from "./reusable-components/GlobalStyles";


export const NotLoggedIn = () => {

  return (
    <PaigeWrapper>
      <p>Du är utloggad</p>
    <Link to="/login">Logga in igen</Link>
 </PaigeWrapper>
  )
}