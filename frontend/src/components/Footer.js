import React from "react";
import { Link } from "react-router-dom";
import { Devices } from './GlobalStyles';


export const Footer = () => {
  return (
    <section>
      <footer>
          <ul>Kontakt</ul>
          <ul><Link to ="/about">Om oss</Link></ul>
      </footer>
    </section>
  )
}
