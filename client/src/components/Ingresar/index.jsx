import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import PropTypes from "prop-types";
import { UserContext } from "context/userContext";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const sendData = async (data, tipo) => {
  const api = tipo === "VENDEDOR" ? "api/seller/signin" : "api/user/signin";
  const response = await fetch(`${config.urlBase}/${api}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const getNotification = () => {
  return [
    { id: 1, name: "Celular", title: "Fuiste Superado" },
    { id: 2, name: "Cuadro", title: "Fuiste Superado" },
    { id: 3, name: "Libro", title: "Ganaste" },
    { id: 4, name: "Zapatilla", title: "Fuiste superado" },
    { id: 5, name: "Libro", title: "Ganaste" },
    { id: 6, name: "Libro", title: "Ganaste" },
  ];
};

const Ingresar = ({ tipo }) => {
  const { ChangeTokenState, setNotifications } = useContext(UserContext);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { token, nombres, tipoUser, id } = await sendData(data, tipo);
    if (token) {
      ChangeTokenState(token, nombres, tipoUser, id);
      setNotifications(getNotification());
      navigate("/");
    } else {
      alert("datos incorrectos");
    }
  };

  return (
    <Grid
      container
      component="form"
      noValidate
      autoComplete="off"
      variant="standard"
      sx={{ button: { color: "black" } }}
      onSubmit={login}
    >
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
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
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
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
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            m: "10px 0px",
            bgcolor: "#ebdf00",
            borderRadius: 3,
            width: "100%",
          }}
        >
          INGRESAR {tipo}
        </Button>
      </Grid>
    </Grid>
  );
};

Ingresar.propTypes = {
  tipo: PropTypes.string.isRequired,
};

export default Ingresar;
