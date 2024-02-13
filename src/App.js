// Elements React (Base, Router)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Elements secondaires 
import Index from "./components/Index";
import NotFound from "./components/base/NotFound";
// Style
import "./style/Reset.scss"; // Permet de s'affranchir de tout style des navigateurs
import "./style/Base.scss"; // Permet de standardiser le style général 
// Le site
const App = () => {
  return (
// Router Front-end pour diviser en page
    <BrowserRouter>
      <Routes>
        {/* Dans l'ordre : Accueil, 404  */}
        <Route path="/" element={<Index />} index /> 
        <Route path="*" element={<NotFound />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
