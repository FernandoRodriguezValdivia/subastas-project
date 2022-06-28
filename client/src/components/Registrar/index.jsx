import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import PropTypes from "prop-types";

const Registrar = ({ tipo }) => {
  return (
    <Grid
      container
      component="form"
      columnSpacing={2}
      noValidate
      autoComplete="off"
      variant="standard"
      sx={{ button: { color: "black" } }}
      // onSubmit={send}
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
          name="mail"
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
