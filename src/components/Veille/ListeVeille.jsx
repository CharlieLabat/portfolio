import React from "react";
import Liste from "../Liste";
import Base from "../base/Base";
import dataVeille from "../../data/veille.json"

const ListeVeille = () => {
  return (
    <Base>
      <Liste donnee={dataVeille} />
    </Base>
  );
};

export default ListeVeille