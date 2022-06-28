import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Usuario from "pages/Usuario";
import Vendedor from "pages/Vendedor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Usuario />} />
        <Route path="/seller" element={<Vendedor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
