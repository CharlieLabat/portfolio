// Element React (Base)
import React from "react";
// Composant Secondaire
import Base from "./Base";
// Style
import "../../style/NotFound.scss"
// Page 404 : Quand la page n'existe pas ou plus
const NotFound = () => {
  return (
    <Base>
      <main className="perdu">
        <h2 className="perdu__titre">
          <span className="perdu__titre--char1">4</span>
          <span className="perdu__titre--char2">0</span>
          <span className="perdu__titre--char3">4</span>
        </h2>
        <p className="perdu__para">
         Vous être perdu ? Vous avez sûrement pris un mauvais lien 
         ou pire, la page n'existe pas ! Retournez dans une page sûre ou
         nettoyez tout chemin pour quitter le néant du Web !
        </p>
      </main>
    </Base>
  );
};

export default NotFound;
