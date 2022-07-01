import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import config from "../../config";

const sendData = async (data) => {
  const response = await fetch(`${config.urlBase}/api/item/create`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.json();
};

const AgregarProducto = () => {
  const send = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await sendData(formData);
    console.log(response);
    if (response.message === "Item Created") {
      alert(response.message);
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
      onSubmit={send}
    >
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <InputBase
          placeholder="Nombre del producto"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="name"
        />
      </Grid>
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <InputBase
          placeholder="Descripción"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="description"
        />
      </Grid>
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <InputBase
          placeholder="Categoría"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="category"
        />
      </Grid>
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <InputBase
          placeholder="Duración"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="duration"
        />
      </Grid>
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <InputBase
          placeholder="Precio Inicial"
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="initialPrice"
        />
      </Grid>
      <Grid item xs={12} sx={{ p: { xs: 0, md: "0 20%" } }}>
        <InputBase
          sx={{
            borderRadius: 4,
            bgcolor: "#d9d9d9",
            p: "3px 20px",
            m: "10px 0px",
            width: "100%",
          }}
          variant="standard"
          name="img"
          type="file"
          inputProps={{
            accept: "image/*",
          }}
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
            mb: "50px",
          }}
        >
          AGREGAR PRODUCTO
        </Button>
      </Grid>
    </Grid>
  );
};

export default AgregarProducto;
