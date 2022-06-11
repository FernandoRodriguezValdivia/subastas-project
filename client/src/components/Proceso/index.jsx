import React from "react";
import Box from "@mui/material/Box";
import CardProceso from "components/CardProceso";
import Typography from "@mui/material/Typography";

const Proceso = () => {
  return (
    <Box sx={{ bgcolor: "#005373" }}>
      <Typography
        variant="h1"
        sx={{
          p: 3,
          fontWeight: "600",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        EN PROCESO
      </Typography>
      <Box
        sx={{
          p: "0 80px",
          display: "grid",
          gap: "40px",
          gridAutoRows: "22rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <CardProceso />
        <CardProceso />
        <CardProceso />
        <CardProceso />
      </Box>
    </Box>
  );
};

export default Proceso;
