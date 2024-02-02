import React from "react";
import Base from "./Base";
import "../../style/NotFound.scss"
const NotFound = () => {
  return (
    <Base>
      <main className="perdu">
        <h2 className="perdu__titre">
          <span className="perdu__titre--char1">4</span>
          <span className="perdu__titre--char2">0</span>
          <span className="perdu__titre--char3">4</span>
        </h2>
        <p className="perdu__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          rerum architecto consequuntur itaque, dignissimos quos a expedita
          quae, perferendis tenetur quas animi quod accusantium excepturi eaque
          minus doloribus beatae sapiente.
        </p>
      </main>
    </Base>
  );
};

export default NotFound;
