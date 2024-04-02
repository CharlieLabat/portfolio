import React from "react";
import Liste from "../Liste";
import Base from "../base/Base";
import Veille from "../../data/veille.json";

const ListeVeille = () => {
  return (
    <Base>
      <Liste donnee={Veille} titreListe="Veille" />
    </Base>
  );
};

export default ListeVeille;
