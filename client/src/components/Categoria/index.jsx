import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const categorias = ["Celulares", "Electrodomesticos"];

const Categoria = () => {
  return (
    <Box sx={{ bgcolor: "#d9d9d9" }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "40%" }}>
        <InputLabel>CATEGORIA</InputLabel>
        <Select label="CATEGORIA" name="categoria" defaultValue="">
          {categorias.map((categoria) => (
            <MenuItem key={categoria} value={categoria}>
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Categoria;
