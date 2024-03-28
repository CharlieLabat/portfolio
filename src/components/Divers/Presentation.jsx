import React from "react";
import Article from "../Article";
import Base from "../base/Base";
import APropos from "../../assets/images/photoAPropos.JPG";

const Presentation = () => {
  return (
    <Base>
      <Article
        titre="Présentation"
        image1={APropos}
        image2={APropos}
        image3={APropos}
        couleur="rouge"
        nomImage1="1re image"
        nomImage2="2e image"
        nomImage3="3e image"
        legende1="C'est Moi !"
        legende2="C'est toujours moi !"
        legende3="Salut ! C'est encore moi !"
        texte1="Je m'appelle Charlie Labat. Je suis né le 10 février 2003 à Abbeville, une petite ville de la Somme (pas l'opération mathématique !). J'ai fait pendant 4-5 ans du thêatre où j'ai appris à jouer un rôle. J'aime bien la musique et j'ai même fait légerement du trombone à coulisse ou tuba. Mais je joue très bien d'un autre instrument à vent : le chant. J'ai appris à chanter avec une professeur de chant et de musique. Je suis un grand joueur de jeux vidéo comme beaucoup de monde. J'aime aussi les maths et l'histoire avec un grand H."
        texte2="Je suis autiste c'est à dire que j'ai pas la même vision du monde comme si mon cerveau était un Linux. Heureusement, j'ai appris à vivre avec et même le valoriser dans beaucoup de situation. J'ai un esprit d'analyse, j'aime apprendre mais aussi enseigner. Expliquer des concepts est pour moi un moyen d'apprentisage important et puissant car je comprendre que je fait. J'aime travailler en équipe. Je considère que l'union fait la force de tout projet et qu'on réussi mieux ensemble. J'aime bien rigoler pour créer une bonne ambience !"
        texte3="J'ai fait une baccalauréat Spécialité Mathématiques et Histoire Géographique ( de la 1re génération et sous le Covid !). Puis, j'ai fait un BTS Services Informatiques aux Organisations (SIO) avec la spécalité de dévellopeur (SLAM). J'ai la certification PIX depuis la terminale. J'ai fait mon 1er stage de BTS dans le centre socio-culturel Previère Lesson à Rochefort puis le second pour UFOLEP 17, une association sportive pour un site Web. Aujourd'hui, je fait une licence professionnelle de développement Web à l'université de la Rochelle. Mon prochain stage sera à la direction des systèmes d'informations (DSI) de l'université de la Rochelle."
        conclusion="Bienvenue sur mon portfolio. C'est un document (ici, c'est un site Web) qui présent mes projets personnels ainsi les information sur le monde de l'informatique. Les pages sont expliquées dans ce modèle de page. En dessous, vous trouvez des liens en relation avec le sujet de l'article."
        source1=""
        source2=""
        source3=""
        sourceNom1="Projet de jeu d'aventure textuelle : SlackDeb Aventure "
        sourceNom2="LinkedIn "
        sourceNom3=""
      />
    </Base>
  );
};

export default Presentation;
