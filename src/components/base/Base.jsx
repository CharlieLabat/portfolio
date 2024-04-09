// Element React (Base)
import React, { useState } from "react";
// Composants Secondaire
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Burger from "./Header/Burger";
// Modèle de la structure des pages du site
const Base = (props) => {
       // Vérifie si le burger est cliqué
       const [burger, setBurger] = useState(false);
       const activerBurger = () => {
         return setBurger(!burger);
       };
  return (

    <>
        {burger && <Burger burger={burger}  activation={() => activerBurger()} />}
     {!burger && <Header burger={burger}  activation={() => activerBurger()}/>}
      {!burger && props.children}
      {!burger && <Footer />} 
    </>
  );
};

export default Base;
