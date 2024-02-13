// Element React (Base)
import React from "react";
// Composants Secondaire
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// Modèle de la structure des pages du site
const Base = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Base;
