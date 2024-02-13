// Element React (Base, Router)
import React from "react";
import { Link } from "react-router-dom";
// Style
import "../../../style/Header/Burger.scss"
// Menu Burger : Menu caché qui s'affiche en mobile et via par un élément clickable 
const Burger = () => {
  return (
    <section className="burger__ouvert">
        
      <h2 className="burger__titre">MENU</h2>


      <nav className="menu-burger">
        <Link to="/" className="menu-burger__element">
          Accueil  {/* Page principal du site avec les informations essentielles */}
        </Link>
        <Link to="/realisation" className="menu__element">
          Réalisation {/* Page des projets réalisés durant mes études et mes (futurs) travaux */}
        </Link>
        <Link to="/veille" className="menu__element">
          Veille {/* Page des information et actualités que je trouve pour me mettre à jour */}
        </Link>
        <Link to="/contact" className="menu__element">
          Contact {/* Page de contact */}
        </Link>
      </nav>
    </section>
  );
};

export default Burger;
