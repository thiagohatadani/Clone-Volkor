import React from "react";
import Carousel from "./componentes/Carousel";
import Navbar from "./componentes/Navbar";
import CategoriesShowcase from "./componentes/CategoriesShowcase";
import Slider from "./componentes/Slider";
import Galeria from "./componentes/Galeria";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <html data-theme="light">
      <Navbar />
      <Carousel />
      <CategoriesShowcase />
      <Slider />
      <Galeria />
      <Footer/>
    </html>
  );
};

export default App;
