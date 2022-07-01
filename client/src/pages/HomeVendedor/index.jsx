import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import CrearProducto from "pages/CrearProducto";
import Productos from "components/Productos";
import config from "../../config";

const drawerWidth = 240;
const options = (data) => {
  return [
    <CrearProducto />,
    <Productos data={data} />,
    <Productos data={data} />,
  ];
};

const sendData = async () => {
  const response = await fetch(`${config.urlBase}/api/item/get`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.json();
};

const HomeVendedor = () => {
  const [select, setSelect] = useState(0);
  const [data, setData] = useState([]);

  const selector = async (id) => {
    setSelect(id);
    if (id !== 0) {
      const respon = await sendData();
      setData(respon.items);
      console.log("fetch a todo", data);
    }
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            mt: "69px",
            height: "82vh",
            bgcolor: "#005373",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider sx={{ borderColor: "#fff" }} />
        <Toolbar />
        <Divider sx={{ borderColor: "#fff" }} />
        <List>
          {[
            "Crear Subasta",
            "Ver subastas activas",
            "Ver subastas finalizadas",
          ].map((text, id) => (
            <ListItem key={text} disablePadding onClick={() => selector(id)}>
              <ListItemButton>
                <ListItemText sx={{ color: "#fff" }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: "#fff" }} />
      </Drawer>

      <Box sx={{ minHeight: "82vh", ml: "239px" }}>{options(data)[select]}</Box>
    </Box>
  );
};

export default HomeVendedor;
