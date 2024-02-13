// Element React (Base)
import React from "react";
// Style
import "../style/Card.scss";
import { Link } from "react-router-dom";
// Carte composé d'un titre externe, une image d'illustration et d'un groupe de 3 paragraphes
// Pour décrire des petits articles ou des fin d'articles ou des miniatures vers les articles
// Les cartes changent de couleurs selon le modificateur de style
const Card = (props) => {
  return (
    <section className="card">
      <h2 className={"card__titre card__titre--" + props.couleur}>
        {props.titre}
      </h2>
      <article className={"card__zone card__zone--" + props.couleur}>
        <figure className="card__image">
          <img src={props.image} alt={props.nomImage} />
        </figure>
        <span className="card__textes">
          <p className="card__texte">{props.texte1}</p>
          <p className="card__texte">{props.texte2}</p>
          <p className="card__texte">{props.texte3}
         <Link to={props.lien} className="card__lien" >{props.nomLien}</Link> 
          </p>
        </span>
      </article>
    </section>
  );
};

export default Card;
