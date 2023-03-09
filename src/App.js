import React, { useState, useEffect } from "react";

// Importar componentes
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
         <Banner />
         <Footer/> 
      </main>
    </div>
  );
};

export default App;
