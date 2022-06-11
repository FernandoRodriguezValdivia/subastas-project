import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";

const pages = [
  { title: "QUIERO COMPRAR", url: "/registro" },
  { title: "QUIERO VENDER", url: "/register" },
];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#005373" }}>
          <Typography
            variant="h6"
            sx={{ textDecoration: "none", display: "block" }}
          >
            LOGO
          </Typography>
          <Box sx={{ borderRadius: 4, bgcolor: "#d9d9d9", ml: "50px" }}>
            <InputBase
              placeholder="BUSCAR PRODUCTOS"
              sx={{ p: "1px", pl: "20px", pr: "20px", width: "300px" }}
            />
          </Box>
          <Box
            sx={{ justifyContent: "flex-end", flexGrow: 1, display: "flex" }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                key={page.title}
                to={page.url}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
