// Element React (BAse)
import React from "react";
// Composants Secondaires
import Base from "./base/Base";
import Bandeau from "./Accueil/Bandeau";
import Card from "./Card";
import Sun from "./Accueil/Sun";
// Element Image
import APropos from "../assets/images/photoAPropos.JPG";
import { Link } from "react-router-dom";
// Style 
import "../style/Accueil/Accueil.scss";
// Page d'accueil du site
const Index = (props) => {
  return (
    <Base>
      <main>
        {/*  Image de bienvenue  */}
        <Bandeau />
        {/*  Carte de présentation de ma personne */}
        <Card
          titre="Présentation"
          couleur="vert"
          image={APropos}
          nomImage="Photo de moi sur un bureau de classe"
          texte1="Bonjour le monde ! C’est Charlie LABAT ! 
          Bienvenue sur mon portfolio, portail entre vous et mes travaux. Venant tout droit du Nord picard, 
          j’était à Surgères du début au collège puis à Rochefort pour le lycée 
          puis le BTS. Je suis actuellement étudiant en licence pro d’informatique à la Rochelle."
          texte2="J’aime l’histoire, les maths et la musique. 
          J’ai fait des années de théâtre et un peu de tuba et du trombone à coulisse mais surtout du chant. En BTS,
          j’ai codé des projets ou étudié des langages comme l’HTML et le CCS, 
          PHP dont du Laravel , du Symfony, du Wordpress ou du MVC, Javascript avec ReactJS et VueJS et Java. J’ai le Bac et le BTS SIO."
          texte3="Sur ce portfolio, vous allez trouver des articles sur mes réalisation 
          mais aussi de la veille informatique notamment sur du développement Web.
           Vous pouvez aussi me contacter et si vous voulez savoir plus sur moi, 
           j’ai écrit une version plus longue : "
          lien="/realisation"
          nomLien="Présentation Détaillé"
        />
        <Sun />
        <Card
          titre="L'Agence"
          couleur="rouge"
          image={APropos}
          nomImage="Photo de moi sur un bureau de classe"
          texte1="Bonjour le monde ! C’est Charlie LABAT ! 
          Bienvenue sur mon portfolio, portail entre vous et mes travaux. Venant tout droit du Nord picard, 
          j’était à Surgères du début au collège puis à Rochefort pour le lycée 
          puis le BTS. Je suis actuellement étudiant en licence pro d’informatique à la Rochelle."
          texte2="J’aime l’histoire, les maths et la musique. 
          J’ai fait des années de théâtre et un peu de tuba et du trombone à coulisse. En BTS,
          j’ai codé des projets ou étudié des langages comme l’HTML et le CCS, 
          PHP dont du Laravel , du Symfony, du Wordpress ou du MVC, Javascript avec ReactJS et VueJS et Java. J’ai le Bac et le BTS SIO."
          texte3="Sur ce portfolio, vous allez trouver des articles sur mes réalisation 
          mais aussi de la veille informatique notamment sur du développement Web.
           Vous pouvez aussi me contacter et si vous voulez savoir plus sur moi, 
           j’ai écrit une version plus longue : "
          lien="/realisation"
          nomLien="Présentation Détaillé"
        />
        <section className="philo">
          <h2 className="philo__titre">L'art d'apprendre</h2>
          <p className="philo__para">
           Ma plus grande philosophie c'est qu'un homme qui est bon, 
           c'est un homme qui apprend et qui fait apprendre. L'informatique se place 
           dans cette philosophie. La technologie évolue sans cesse et l'adaptation 
           vers de nouvelles techniques ou de nouvelles méthodes. Ici des articles vous permet de
           comprendre tout question, principe ou technologie 
          </p>
        </section>
        <section className="veille">
          <h2 className="veille__titre">
            Des articles vous attentent pour comprendre le monde de
            l’informatique
          </h2>
          <Link to="/veille" className="veille__bouton">
            Vers la veille
          </Link>
        </section>
        <section className="contact">
          <h2 className="contact__titre">Contact</h2>
          <p className="contact__para">
            Vous voulez me contacter ? J'ai préparé un petit formulaire sympa
            pour tout échange pro.
          </p>
          <Link to="/contact" className="contact__bouton">
            Contacter
          </Link>
        </section>
      </main>
    </Base>
  );
};

export default Index;
