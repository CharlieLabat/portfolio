import React from "react";
import Liste from "../Liste";
import Base from "../base/Base";
import dataRealisation from "../../data/realisation.json"
const ListeRealisation = () => {
  return (
    <Base>
      <Liste donnee={dataRealisation} />
    </Base>
  );
};

export default ListeRealisation