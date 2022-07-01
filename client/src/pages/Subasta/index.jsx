import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

const Subasta = () => {
  const { id } = useParams();
  return <Box sx={{ minHeight: "82vh" }}>{id}</Box>;
};

export default Subasta;
