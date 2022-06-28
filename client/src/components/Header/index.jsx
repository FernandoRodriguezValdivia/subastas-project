import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "context/userContext";

const pages = [
  { title: "QUIERO COMPRAR", url: "/user" },
  { title: "QUIERO VENDER", url: "/seller" },
];

const Header = () => {
  const { isLogin, ClearTokenState } = useContext(UserContext);
  const navigate = useNavigate();

  const desconectar = () => {
    ClearTokenState();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#005373" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", display: "block", color: "#ffffff" }}
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
            {isLogin ? (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={desconectar}
              >
                Desconectar
              </Button>
            ) : (
              pages.map((page) => (
                <Button
                  component={Link}
                  key={page.title}
                  to={page.url}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
