import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Header/Burger.scss"
const Burger = () => {
  return (
    <section className="burger__ouvert">
        
      <h2 className="burger__titre">MENU</h2>


      <nav className="menu-burger">
        <Link to="/" className="menu-burger__element">
          Accueil
        </Link>
        <Link to="/realisation" className="menu__element">
          Réalisation
        </Link>
        <Link to="/veille" className="menu__element">
          Veille
        </Link>
        <Link to="/contact" className="menu__element">
          Contact
        </Link>
      </nav>
    </section>
  );
};

export default Burger;
