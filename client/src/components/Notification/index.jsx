/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Box, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { NotificationContext } from "context/notificationContext";

const Notification = ({ id, name, title }) => {
  const { deleteNotification } = useContext(NotificationContext);

  return (
    <Box sx={{ display: "flex" }}>
      <ListItem button>
        <Box>
          <ListItemText primary={title} secondary={`Subasta de ${name}`} />
        </Box>
      </ListItem>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={() => deleteNotification(id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Notification;
