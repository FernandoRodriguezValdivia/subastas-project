import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import CardProceso from "components/CardProceso";

const Productos = ({ data }) => {
  return (
    <Box sx={{ bgcolor: "#333", minHeight: "83vh" }}>
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
        FINALIZADOS
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
        {data.map((item) => (
          <CardProceso
            key={item.id}
            id={item.id}
            nombre={item.name}
            precio={item.initialPrice}
            url={item.imageUrl}
            detalles={item.description}
          />
        ))}
      </Box>
    </Box>
  );
};

Productos.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      initialPrice: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Productos;
