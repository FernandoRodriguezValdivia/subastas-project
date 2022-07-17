/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Box, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { UserContext } from "context/userContext";

const Notification = ({ id, nombre, title }) => {
  const { notifications, setNotifications } = useContext(UserContext);

  const eliminar = (idItem) => {
    setNotifications(notifications.filter((item) => item.id !== idItem));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ListItem button>
        <Box>
          <ListItemText primary={title} secondary={`Subasta de ${nombre}`} />
        </Box>
      </ListItem>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={() => eliminar(id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Notification;
