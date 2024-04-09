// Element React (Base)
import React from "react";
// Style
import "../style/Article.scss";


// Un Article est une Grand Card avec 3 groupe d'un texte et d'une image ainsi une conclusion avec sources
// Elle dépend du contenu gérer en JSON ou en dur et sert comme modèle aux pages d'article
// Les articles changent de couleurs selon le modificateur de style
const Article = (props) => {
  return (
    <section className="article">
      <h1 className={"article__titre article__titre--" + props.couleur}>
        {props.titre}
      </h1>
      <article className={"article__zone article__zone--" + props.couleur}>
        <div className="article__partie">
          <figure className="article__image">
            <img src={props.image1} alt={props.nomImage1} />
            <figcaption className={"article__legende article__legende--" + props.couleur}>{props.legende1}</figcaption>
          </figure>
          <p className="article__texte">{props.texte1}</p>
        </div>
        <div className="article__partie article__partie--inverse">
          <figure className="article__image">
            <img src={props.image2} alt={props.nomImage2} />
            <figcaption className={"article__legende article__legende--" + props.couleur}>{props.legende2}</figcaption>
          </figure>
          <p className="article__texte">{props.texte2}</p>
        </div>
        <div className="article__partie">
          <figure className="article__image">
            <img src={props.image3} alt={props.nomImage3} />
            <figcaption className={"article__legende article__legende--" + props.couleur}>{props.legende3}</figcaption>
          </figure>
          <p className="article__texte">{props.texte3}</p>
        </div>
      </article>
      <section className="article__fin">
        <h2 className="article__fin-titre">Conclusion</h2>
        <p className="article__conclusion">{props.conclusion}</p>
        <div className="article__sources">
          <a href={props.source1} className="article__source">
            {props.sourceNom1}
          </a>
          <a href={props.source2} className="article__source">
            {props.sourceNom2}
          </a>
          <a href={props.source3} className="article__source">
            {props.sourceNom3}
          </a>
        </div>
      </section>
    </section>
  );
};

export default Article;
