// Element React (Base, Hooks, Router)
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Element SVG (Logo et Burger)
import IconBurger from "../../../assets/images/Icone Burger.svg";
import IconBurgerBis from "../../../assets/images/Icone Burger 2.svg";
import Logo from "../../../assets/images/logo.svg";
// Style
import "../../../style/Header/Header.scss";
// Composant Secondaire
import Burger from "./Burger";
// En tête du site
const Header = () => {
  // Vérifie si le burger est cliqué
  const [burger, setBurger] = useState(false);
  const activerBurger = () => {
    return setBurger(!burger);
  };

  return (
    <header className="tete">
      {/* Est que le burger est active ? Oui, on afficher le burger sinon le menu desktop */}
      {!burger && (
        <nav className="menu">
          <Link to="/" className="menu__element">
            Accueil{" "}
            {/* Page principal du site avec les informations essentielles */}
          </Link>
          <Link to="/realisation" className="menu__element">
            Réalisation{" "}
            {/* Page des projets réalisés durant mes études et mes (futurs) travaux */}
          </Link>
          <Link to="/" >
            <figure className="logo">
              <img src={Logo} alt="logo" />
            </figure>
          </Link>
          <Link to="/veille" className="menu__element">
            Veille{" "}
            {/* Page des information et actualités que je trouve pour me mettre à jour */}
          </Link>
          <Link to="/contact" className="menu__element">
            Contact {/* Page de contact */}
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
          <img src={!burger ? IconBurger : IconBurgerBis} alt="burger" />
        </figure>
      )}
      {burger && <Burger />}
    </header>
  );
};

export default Header;
