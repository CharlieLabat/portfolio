// Element React (Base)
import React from "react";
// Style 
import "../../style/Accueil/Bandeau.scss"
// Bandeau de bienvenue du site 
const Bandeau = () => {
  return (
    <section className="bandeau">
      <h1 className="bandeau__titre">
        Bienvenue sur le portfolio de Charlie LABAT
      </h1>
    </section>
  );
};

export default Bandeau;
