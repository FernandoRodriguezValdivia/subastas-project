import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

const IngresarUsuario = () => {
  return (
    <Grid
      container
      component="form"
      noValidate
      autoComplete="off"
      variant="standard"
      // onSubmit={send}
    >
      <Grid item xs={12}>
        <InputBase
          placeholder="E-mail"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "80%",
          }}
          variant="standard"
          name="mail"
        />
      </Grid>
      <Grid item xs={12}>
        <InputBase
          placeholder="Contraseña"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "80%",
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
            width: "100%",
            m: "10px 0px",
            bgcolor: "#ebdf00",
            color: "#000000",
            borderRadius: 3,
          }}
        >
          INGRESAR
        </Button>
      </Grid>
    </Grid>
  );
};

export default IngresarUsuario;
