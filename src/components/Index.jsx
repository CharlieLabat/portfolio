// Element React (BAse)
import React from "react";
// Composants Secondaires
import Base from "./base/Base";
import Bandeau from "./Accueil/Bandeau";
import Card from "./Card";
// Element Image
import APropos from "../assets/images/photoAPropos.JPG";


// Page d'accueil du site
const Index = (props) => {


  return (
    <Base>
      <main>
        <Bandeau />
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
        {/*  Carte de présentation de ma personne */}
        <section className="">

        </section>
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
      </main>
    </Base>
  );
};

export default Index;
