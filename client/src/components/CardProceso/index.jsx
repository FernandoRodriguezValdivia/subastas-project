/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModalCardProceso from "components/ModalCardProceso";
import ModalCustom from "components/ModalCustom";

const nombred = "NOMBRE DEL PRODUCTO";
const preciod = "150";
const urld =
  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60";

const styleImage = {
  maxWidth: "150px",
  height: "150px",
  objectFit: "fill",
};

const CardProceso = ({
  id,
  nombre = nombred,
  precio = preciod,
  url = urld,
  detalles,
}) => {
  const ref = React.createRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        bgcolor: "#d9d9d9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        boxShadow: "5px 5px 15px #d9d9d9",
        borderRadius: 4,
      }}
    >
      <CardMedia component="img" image={url} sx={styleImage} />
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
      <Button sx={{ color: "#000000" }} onClick={handleOpen}>
        Ver Detalles
      </Button>
      <ModalCustom open={open} handleClose={handleClose}>
        <ModalCardProceso
          ref={ref}
          handleClose={handleClose}
          id={id}
          nombre={nombre}
          precio={precio}
          detalles={detalles}
          url={url}
        />
      </ModalCustom>
    </Box>
  );
};

export default CardProceso;
