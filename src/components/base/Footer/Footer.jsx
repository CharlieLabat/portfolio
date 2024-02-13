// Element React (Base, Router)
import React from "react";
import { Link } from "react-router-dom";
// Style
import "../../../style/Footer/Footer.scss"
// Pied de page du site
const Footer = () => {
    return <footer className="pied">
         <Link to="/" className="pied__element">
            Accueil
          </Link>
          <Link to="/realisation" className="pied__element">
            Réalisation
          </Link>
          <Link to="/veille" className="pied__element">
            Veille
          </Link>
          <Link to="/contact" className="pied__element">
            Contact
          </Link>
          <a href="https://www.univ-larochelle.fr/" className="pied__element">
            Université de La Rochelle
          </a>
          <address className="pied__element">
            Copyright Charlie Labat 2023-2024
          </address>
    </footer>
}

export default Footer;