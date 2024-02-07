import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconBurger from "../../../assets/images/Icone Burger.svg";
import IconBurgerBis from "../../../assets/images/Icone Burger 2.svg";
import Logo from "../../../assets/images/logo.svg"

import "../../../style/Header/Header.scss";
import Burger from "./Burger";
const Header = () => {
  const [burger, setBurger] = useState(false);
  const activerBurger = () => {
    return setBurger(!burger);
  };
  return (
    <header className="tete">
      {!burger && (
        <nav className="menu">
          <Link to="/" className="menu__element">
            Accueil
          </Link>
          <Link to="/realisation" className="menu__element">
            Réalisation
          </Link>
          <figure className="logo">
            <img src={Logo} alt="logo" />
          </figure>
          <Link to="/veille" className="menu__element">
            Veille
          </Link>
          <Link to="/contact" className="menu__element">
            Contact
          </Link>
        </nav>
      )}
      {!burger && (
        <figure
          className="burger"
          onClick={() => {
            activerBurger();
          }}
        >
          <img src={!burger?IconBurger:IconBurgerBis} alt="burger" />
        </figure>
      )}
      {burger && <Burger />}
    </header>
  );
};

export default Header;
