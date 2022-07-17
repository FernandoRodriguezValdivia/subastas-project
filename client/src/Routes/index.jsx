// import React, { useContext } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Usuario from "pages/Usuario";
import Vendedor from "pages/Vendedor";
import HomeVendedor from "pages/HomeVendedor";
import Subasta from "pages/Subasta";
// import { UserContext } from "context/userContext";

const AppRoutes = () => {
  // const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeseller/*" element={<HomeVendedor />} />
        <Route path="/user" element={<Usuario />} />
        <Route path="/seller" element={<Vendedor />} />
        <Route path="/subasta/:id" element={<Subasta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
