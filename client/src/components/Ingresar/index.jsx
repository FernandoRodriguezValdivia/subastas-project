import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import PropTypes from "prop-types";

import { UserContext } from "context/userContext";

const Ingresar = ({ tipo }) => {
  const { ChangeTokenState } = useContext(UserContext);

  const login = (e) => {
    e.preventDefault();
    ChangeTokenState("this-toke", "Fernando", tipo, "this-id");
  };

  return (
    <Grid
      container
      component="form"
      noValidate
      autoComplete="off"
      variant="standard"
      sx={{ button: { color: "black" } }}
      // onSubmit={send}
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
          name="mail"
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
          onClick={login}
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
