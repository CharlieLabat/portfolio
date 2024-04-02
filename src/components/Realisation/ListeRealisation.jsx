import React from "react";
import Liste from "../Liste";
import Base from "../base/Base";
import Realisation from "../../data/realisation.json";

const ListeRealisation = () => {
  return (
    <Base>
      <Liste donnee={Realisation} titreListe="Réalisation" />
    </Base>
  );
};

export default ListeRealisation;
