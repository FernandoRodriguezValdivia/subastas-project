import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AgregarProducto from "components/AgregarProducto";
import Divider from "@mui/material/Divider";

const CrearProducto = () => {
  return (
    <Box sx={{ minHeight: "82vh", display: "flex" }}>
      <Box
        sx={{
          bgcolor: "#005373",
          width: { xs: "80%", sm: "90%" },
          borderRadius: 6,
          margin: "auto",
        }}
      >
        <Typography sx={{ color: "#ffffff", mt: "20px", textAlign: "center" }}>
          AGREGAR PRODUCTO
        </Typography>
        <Divider sx={{ bgcolor: "#ffffff", m: "0 130px", mb: "20px" }} />
        <AgregarProducto />
      </Box>
    </Box>
  );
};

export default CrearProducto;
