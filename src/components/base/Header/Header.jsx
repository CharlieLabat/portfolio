// Element React (Base, Hooks, Router)
import React from "react";
import { Link } from "react-router-dom";
// Element SVG (Logo et Burger)
import IconBurger from "../../../assets/images/Icone Burger.svg";

import Logo from "../../../assets/images/logo.svg";
// Style
import "../../../style/Header/Header.scss";

// En tête du site
const Header = (props) => {


  return (
    <header className="tete">
      {/* Est que le burger est active ? Oui, on afficher le burger sinon le menu desktop */}
      {!props.burger && (
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
      {!props.burger && (
        <figure
          className="burger"
          onClick={props.activation}
        >
          <img src={IconBurger}  alt="burger" />
        </figure>
      )}
  
    </header>
  );
};

export default Header;
