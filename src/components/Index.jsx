// Element React (BAse)
import React from "react";
// Composants Secondaires
import Base from "./base/Base";
import Bandeau from "./Accueil/Bandeau";
import Card from "./Card";
// Page d'accueil du site 
const Index = (props) => {
  return (
    <Base>
      <main>
        <Bandeau /> 
        <Card titre="Test"/> {/*  Carte de présentation de ma personne */}
      </main>
    </Base>
  );
};

export default Index;
