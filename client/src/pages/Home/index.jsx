import React from "react";
import Box from "@mui/material/Box";
import Carrusel from "components/Carrusel";
import Categoria from "components/Categoria";
import Proceso from "components/Proceso";
import Proximo from "components/Proximo";

const Home = () => {
  return (
    <Box>
      <Carrusel />
      <Categoria />
      <Proceso />
      <Proximo />
    </Box>
  );
};

export default Home;
