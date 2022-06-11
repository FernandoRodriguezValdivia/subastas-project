import React from "react";
import Box from "@mui/material/Box";
import CardProximo from "components/CardProximo";
import Typography from "@mui/material/Typography";

const Proximo = () => {
  return (
    <Box sx={{ bgcolor: "#005373", pb: "60px" }}>
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
        PROXIMAMENTE
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
        <CardProximo />
        <CardProximo />
        <CardProximo />
        <CardProximo />
      </Box>
    </Box>
  );
};

export default Proximo;
