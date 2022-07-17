/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#005373",
  boxShadow: "5px 5px 15px #d9d9d9",
  p: 4,
  display: "flex",
  borderRadius: 4,
  alignItems: "center",
  color: "#ffffff",
};

const styleImage = {
  maxWidth: "200px",
  height: "200px",
  objectFit: "fill",
};

const urld =
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60";

const nombred = "NOMBRE DEL PRODUCTO";
const preciod = "150";
const detallesd = "Esto es el detalle del producto, puede ser alguna oración";

const ModalCardProceso = React.forwardRef(
  (
    {
      url = urld,
      nombre = nombred,
      precio = preciod,
      detalles = detallesd,
      id,
    },
    ref,
  ) => {
    return (
      <Box sx={style} ref={ref}>
        <CardMedia component="img" image={url} sx={styleImage} />
        <Box
          sx={{
            m: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            height: "200px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              p: "0px 30px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {nombre}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              p: "0px 30px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            PRECIO: S/ {precio}
          </Typography>
          <Typography>{detalles}</Typography>
          <Button
            component={Link}
            to={`/subasta/${id}`}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Ir a subasta
          </Button>
        </Box>
      </Box>
    );
  },
);

export default ModalCardProceso;
