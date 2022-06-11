import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import RegistroUsuario from "pages/RegistroUsuario";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<RegistroUsuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
