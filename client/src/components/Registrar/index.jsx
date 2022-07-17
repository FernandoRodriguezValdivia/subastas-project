import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import config from "../../config";

const sendData = async (data, tipo) => {
  const api = tipo === "VENDEDOR" ? "api/seller/create" : "api/user/create";
  const response = await fetch(`${config.urlBase}/${api}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const Registrar = ({ tipo }) => {
  const navigate = useNavigate();

  const send = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await sendData(data, tipo);
    if (response.message === "User Created") {
      console.log(response);
      alert(response.message);
      navigate("/");
    }
  };

  return (
    <Grid
      container
      component="form"
      columnSpacing={2}
      noValidate
      autoComplete="off"
      variant="standard"
      sx={{ button: { color: "black" } }}
      onSubmit={send}
    >
      <Grid item xs={6}>
        <InputBase
          placeholder="Nombres"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="nombres"
        />
      </Grid>
      <Grid item xs={6}>
        <InputBase
          placeholder="Apellidos"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="apellidos"
        />
      </Grid>
      <Grid item xs={6}>
        <InputBase
          placeholder="E-mail"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="email"
        />
      </Grid>
      <Grid item xs={6}>
        <InputBase
          placeholder="Contraseña"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="password"
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            m: "10px 0px",
            bgcolor: "#ebdf00",
            color: "#000000",
            borderRadius: 3,
            width: "100%",
          }}
        >
          REGISTRAR {tipo}
        </Button>
      </Grid>
    </Grid>
  );
};

Registrar.propTypes = {
  tipo: PropTypes.string.isRequired,
};

export default Registrar;
