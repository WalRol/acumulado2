import React, { useState, useEffect } from "react";

// Importar componentes
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

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
