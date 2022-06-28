import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

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

const url =
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60";

const nombre = "NOMBRE DEL PRODUCTO";
const precio = "150";
const detalles = "Esto es el detalle del producto, puede ser alguna oración";

const ModalCardProceso = React.forwardRef((props, ref) => {
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
      </Box>
    </Box>
  );
});

export default ModalCardProceso;
