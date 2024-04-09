// Element React (Base, Router)
import React from "react";
import { Link } from "react-router-dom";
// Style
import "../../../style/Header/Burger.scss"
import IconBurgerBis from "../../../assets/images/Icone Burger 2.svg";
// Menu Burger : Menu caché qui s'affiche en mobile et via par un élément clickable 
const Burger = (props) => {
  return (
    <section className="burger__ouvert">
              <figure
          className="burger__ferme"
          onClick={props.activation}
        >
          <img src={IconBurgerBis}  alt="burger" />
        </figure>
      <h2 className="burger__titre">MENU</h2>


      <nav className="menu-burger">
        <Link to="/" className="menu-burger__element" reloadDocument>
          Accueil  {/* Page principal du site avec les informations essentielles */}
        </Link>
        <Link to="/realisation" className="menu-burger__element" reloadDocument>
          Réalisation {/* Page des projets réalisés durant mes études et mes (futurs) travaux */}
        </Link>
        <Link to="/veille" className="menu-burger__element" reloadDocument>
          Veille {/* Page des information et actualités que je trouve pour me mettre à jour */}
        </Link>
        <Link to="/contact" className="menu-burger__element" reloadDocument>
          Contact {/* Page de contact */}
        </Link>
      </nav>
    </section>
  );
};

export default Burger;
