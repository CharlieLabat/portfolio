// Element React (Base, Router)
import React from "react";
import { Link } from "react-router-dom";
// Style
import "../../../style/Footer/Footer.scss"
// Pied de page du site
const Footer = () => {
    return <footer className="pied">
         <Link to="/" className="pied__element">
            Accueil {/* Page principal du site avec les informations essentielles */}
          </Link>
          <Link to="/realisation" className="pied__element">
            Réalisation {/* Page des projets réalisés durant mes études et mes (futurs) travaux */}
          </Link>
          <Link to="/veille" className="pied__element">
            Veille {/* Page des information et actualités que je trouve pour me mettre à jour */}
          </Link>
          <Link to="/contact" className="pied__element">
            Contact  {/* Page de contact */}
          </Link>
          <a href="https://www.univ-larochelle.fr/" className="pied__element">
            Université de La Rochelle  {/* Lien vers l'unversité de la Rochelle */}
          </a>
          <address className="pied__element">
            Copyright Charlie Labat 2023-2024
          </address>
    </footer>
}

export default Footer;