// Elements React (Base, Router)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Elements secondaires 
import Index from "./components/Index";
import NotFound from "./components/base/NotFound";
import ListeRealisation from "./components/Realisation/ListeRealisation";
import ListeVeille from "./components/Veille/ListeVeille";
// Style
import "./style/Reset.scss"; // Permet de s'affranchir de tout style des navigateurs
import "./style/Base.scss"; // Permet de standardiser le style général 
import Contact from "./components/Contact";
import Presentation from "./components/Divers/Presentation";

// Le site
const App = () => {
  return (
// Router Front-end pour diviser en page
    <BrowserRouter>
      <Routes>
        {/* Dans l'ordre : Accueil, 404, Liste des réalisations, Liste de la veille, Contact , Présentation */}
        <Route path="/" element={<Index />} index /> 
        <Route path="*" element={<NotFound />} />
        <Route path="/realisation" element={<ListeRealisation />} />
        <Route path="/veille" element={<ListeVeille />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/presentation" element={<Presentation />} />
        

      </Routes>


    </BrowserRouter>
  );
}

export default App;
