import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

import SubastaActiva from "components/SubastaActiva";

const Subasta = () => {
  const { id } = useParams();
  return (
    <Box sx={{ minHeight: "82vh" }}>
      <SubastaActiva id={id} />
    </Box>
  );
};

export default Subasta;
