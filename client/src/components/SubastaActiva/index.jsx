/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, CardMedia, Grid, InputBase, Typography } from "@mui/material";

import { SocketContext } from "context/socketContext";
import { UserContext } from "context/userContext";

const styleImage = {
  maxWidth: "450px",
  height: "450px",
  objectFit: "fill",
};

const SubastaActiva = ({ id }) => {
  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserContext);
  const [data, setData] = useState({});
  const [comprador, setComprador] = useState();

  const enviando = (e) => {
    e.preventDefault();
    const cant = Number(e.target.oferta.value);
    const newName = user.name;
    const idItem = id;
    const idUser = localStorage.getItem("id");
    const payload = { cant, newName, idItem, idUser };
    socket?.emit("add", payload);
    console.log("emit", payload);
  };

  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(`http://localhost:8000/api/item/activa/${id}`);
      const resjson = await res.json();
      setData(resjson.item);
      setComprador(resjson.item.userName);
    };

    getItem();
  }, []);

  useEffect(() => {
    socket?.emit("room", id);
    return () => socket?.emit("salir", id);
  }, [socket]);

  useEffect(() => {
    socket?.on("update", (payload) => {
      setData((prev) => {
        return { ...prev, finalPrice: payload.cant };
      });
      setComprador(payload.newName);
    });
  }, [socket]);

  return (
    <Box
      sx={{
        minHeight: "82vh",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <CardMedia component="img" image={data.imageUrl} sx={styleImage} />
      </Box>
      <Box
        sx={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          border: "1px solid black",
        }}
      >
        <Button variant="contained" sx={{ width: "40%" }}>
          Tiempo restante: {data.duration}
        </Button>
        <Typography
          variant="h1"
          sx={{
            p: "0px 30px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {data.name}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            p: "0px 30px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          OFERTA ACTUAL: S/ {data.finalPrice}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            p: "0px 30px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          DUEÑO ACTUAL: {comprador}
        </Typography>
        <Grid
          container
          component="form"
          noValidate
          autoComplete="off"
          variant="standard"
          onSubmit={enviando}
          sx={{
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <Grid item xs={6}>
            <InputBase
              placeholder="INGRESE SU OFERTA"
              name="oferta"
              sx={{
                p: "1px",
                pl: "20px",
                pr: "20px",
                width: "200px",
                border: "1px solid black",
                ml: "10px",
                borderRadius: "5px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button sx={{ ml: "10px" }} variant="contained" type="submit">
              Enviar oferta
            </Button>
          </Grid>
        </Grid>
        <Button
          sx={{ ml: "10px" }}
          variant="contained"
          type="submit"
          onClick={() => {
            socket?.emit("room", id);
          }}
        >
          conectar
        </Button>
        <Button
          sx={{ ml: "10px" }}
          variant="contained"
          type="submit"
          onClick={() => {
            socket?.emit("salir", id);
          }}
        >
          desconectar
        </Button>
      </Box>
    </Box>
  );
};

export default SubastaActiva;
