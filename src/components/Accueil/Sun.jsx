// Element React (Base)
import React from "react";
// Style
import "../../style/Accueil/Sun.scss";
// Sorte de soleil avec des mot clés qui tourne en demi cercle
// avec moi même au centre. L'animation de parcours des mots et l'affichage
// de la compétence se feront en JS

const Sun = () => {
  return (
    <section className="sun">
      <span className="sun__titres">
        <p className="sun__titre1">SOFT</p>
        <p className="sun__titre2">HARD</p>
      </span>
      <figure className="sun__image">
        <img src="" alt="Centre" />
        <figcaption className="sun_description">Blabla</figcaption>
      </figure>
      <ul className="mots mots--soft">
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
      </ul>
      <ul className="mots mots--hard">
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
        <li className="mot">TEST</li>
      </ul>
    </section>
  );
};

export default Sun;
