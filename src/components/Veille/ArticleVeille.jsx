import React from "react";
import Base from "../base/Base";
import Article from "../Article";
import Veille from "../../data/veille.json";
import { useParams } from "react-router-dom";

const ArticleVeille = () => {
  const param = useParams();

  const element = Veille.elements[param.id];

  return (
    <Base>
      <Article
        titre={element.titre}
        image1={element.images[0]}
        image2={element.images[1]}
        image3={element.images[2]}
        couleur={element.couleur}
        nomImage1={element.nomImages[0]}
        nomImage2={element.nomImages[1]}
        nomImage3={element.nomImages[2]}
        legende1={element.legendes[0]}
        legende2={element.legendes[1]}
        legende3={element.legendes[2]}
        texte1={element.textes[0]}
        texte2={element.textes[1]}
        texte3={element.textes[2]}
        conclusion={element.conclusion}
        source1={element.sources[0]}
        source2={element.sources[1]}
        source3={element.sources[2]}
        sourceNom1={element.sourcesNom[0]}
        sourceNom2={element.sourcesNom[1]}
        sourceNom3={element.sourcesNom[2]}
      />
    </Base>
  );
};

export default ArticleVeille;
