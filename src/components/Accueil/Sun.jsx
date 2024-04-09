// Element React (Base)
import React, { useState } from "react";
// Style
import "../../style/Accueil/Sun.scss";
import SunImage from "../../assets/images/charlie.png"
// Sorte de soleil avec des mot clés qui tourne en demi cercle
// avec moi même au centre. L'animation de parcours des mots et l'affichage
// de la compétence se feront en CSS/JS

const Sun = () => {
  const [visible, setVisible] = useState(false);
  const [description, setDecription] = useState(null);
  const listeDescription = [
    // Partie Soft
    {
      id: 0,
      nom: "Adaption",
      description:
        "L'adaption est la capacité de changer ses habitudes par des nouvelles. C'est la qualité la plus remarque que j'ai. Un nouvel environnement est un grand défi mais qui me fait pas peur !",
    },
    {
      id: 1,
      nom: "Analyse",
      description:
        "L'analyse est l'action de comprendre les différents idées d'un concept. J'aime bien comprendre comment cela fonctionne et même pouvoir expliquer !",
    },
    {
      id: 2,
      nom: "Motivation",
      description:
        "Avoir de la volonté, c'est toujours chercher son but peu n'importe la situation. J'ai toujours de la volonté à revendre tellement les projects sont superbes !",
    },
    {
      id: 3,
      nom: "Autoformation",
      description:
        "L'informatique est un domaine qui change tout le temps. Lire la documentation et faire des projets de nouveau type sont des forces que j'oublie jamais...",
    },
    {
      id: 4,
      nom: "Enthousiasme",
      description: "Avoir de l'humeur dans toute organisation c'est important pour le travail. Un travail sain dans un esprit sain !",
    },
    {
      id: 5,
      nom: "Attention",
      description: "Dans tout concept, des éléments ont un niveau d'évidence. Moi, je regarde notamment les petits détails qui sont en réalité très importants.",
    },
    // Partie Hard
    {
      id: 6,
      nom: "Objet",
      description: "La programmation orienté objet est un modèle qui consiste à représenter toute choses ou êtres en une variable d'état (attribut) et d'action (méthode). C'est notamment utilisé dans Java dont j'ai appris à des logiciels native sur PC ou sur téléphone",
    },
    {
      id: 7,
      nom: "Web",
      description: "Le Web est la partie d'Internet qui consiste à lier des documents virtuels à l'aide de hyperlien. Cela a été programmé en HTML/CSS dont je connais une grand partie qui a permis notamment de créer ce site. Je connais aussi quelques bases en Réseau qui permet de comprendre le fonctionnement interne du Web.",
    },
    {
      id: 8,
      nom: "Devops",
      description: "Le Devops est l'ensemble des techniques qui consiste à mettre en forme et en place une application par des techniques automatiques et sans problème en amont. Je ne connais que les bases.",
    },
    {
      id: 9,
      nom: "Git",
      description: "Git est un système de gestion de version d'un projet. Je connais l'essentiel des processus de Git. De plus, cette technologie m'a mis plus à l'aise avec Linux et ces commandes.",
    },
    {
      id: 10,
      nom: "JS",
      description: "Javascript est un language de programmation qui permet de gérer des interactions dynamiques sur des sites Web. Il est aussi à l'origine de Framework important pour le web comme React JS par Facebook ou VueJS. C'est avec React que ce site est crée.",
    },
    {
      id: 11,
      nom: "PHP",
      description: "PHP est un language de programmation qui permet des traitement de données et des stucture sur des sites Web. C'est utilisé par des Framework comme Laravel ou Symfony. D'ailleurs, un de mes projets de stage avec un Framework PHP maison.",
    },
  ];
  const afficherDesc = (selectId) => {
    setVisible(!visible);
    setDecription(listeDescription.filter((e) => e.id === selectId)[0]);
  };
  return (
    <section className="sun">
      <span className="sun__titres">
        <p className="sun__titre">SOFT</p>
        <p className="sun__titre">HARD</p>
      </span>
      <figure className="sun__image">
        <img src={SunImage} alt="Centre" />
        {visible && (
          <figcaption className="sun__description">
            <span className="sun__desc-titre">{description.nom}</span>
            <p className="sun__desc-texte">{description.description}</p>
          </figcaption>
        )}
      </figure>
      <div className="sun__mot-cle">
        <ul className="mots mots--soft">
          <li className="mot mot--s1" onClick={() => afficherDesc(0)}>
            Adaption
          </li>
          <li className="mot mot--s2" onClick={() => afficherDesc(1)}>
            Analyse
          </li>
          <li className="mot mot--s3" onClick={() => afficherDesc(2)}>
            Motivation
          </li>
          <li className="mot mot--s4" onClick={() => afficherDesc(3)}>
            Compréhension
          </li>
          <li className="mot mot--s5" onClick={() => afficherDesc(4)}>
            Enthousiasme
          </li>
          <li className="mot mot--s6" onClick={() => afficherDesc(5)}>
            Attention
          </li>
        </ul>
        <ul className="mots mots--hard">
          <li className="mot mot--h1" onClick={() => afficherDesc(6)}>
            Objet
          </li>
          <li className="mot mot--h2" onClick={() => afficherDesc(7)}>
            Web
          </li>
          <li className="mot mot--h3" onClick={() => afficherDesc(8)}>
            Devops
          </li>
          <li className="mot mot--h4" onClick={() => afficherDesc(9)}>
            Git
          </li>
          <li className="mot mot--h5" onClick={() => afficherDesc(10)}>
            JS
          </li>
          <li className="mot mot--h6" onClick={() => afficherDesc(11)}>
            PHP
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sun;
