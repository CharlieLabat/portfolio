import React from "react";
import "../style/Card.scss";
const Card = (props) => {
    return (
        <section className="card">
            <h2 className={"card__titre card__titre--"+props.couleur}>{props.titre}</h2>
            <article className={"card__zone card__zone--"+props.couleur}>
            <figure className="card__image">
                <img src={props.image} alt={props.nomImage} />
            </figure>
            <p className="card__texte">{props.texte}</p>
            </article>
        </section>
    );
}

export default Card;