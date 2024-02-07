import React from "react";
import Base from "./base/Base";
import Bandeau from "./Accueil/Bandeau";
import Card from "./Card";

const Index = (props) => {
  return (
    <Base>
      <main>
        <Bandeau />
        <Card titre="Test"/>
      </main>
    </Base>
  );
};

export default Index;
