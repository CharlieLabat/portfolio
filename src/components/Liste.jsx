import React from "react";
import Card from "./Card";
import "../style/Liste.scss";
const Liste = (props) => {
 

  

  return (
    <section className="liste">
        <h2 className="liste__titre">{props.titreListe}</h2>
      {props.donnee.elements.map((element) => {
        return props.donnee ? <Card titre={element.titre}
        couleur={element.couleur}
        image={element.images[0]}
        nomImage={element.nomImages[0]}
        texte1={element.textes[0]}
        texte2={element.textes[1]}
        texte3={element.textes[2]}

        lien={element.route}
        nomLien={element.nomRoute}
        
        /> : "Pas d'article";
      })}
    </section>
  );
};

export default Liste;
