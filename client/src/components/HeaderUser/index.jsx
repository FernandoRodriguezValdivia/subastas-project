import React, { useState, useContext } from "react";
import {
  Badge,
  Box,
  Button,
  IconButton,
  List,
  Menu,
  Tooltip,
  Divider,
  ListSubheader,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";

import Notification from "components/Notification";
import { UserContext } from "context/userContext";

const HeaderUser = ({ desconectar }) => {
  const { notifications } = useContext(UserContext);
  const [anchorNotification, setAnchorNotification] = useState(null);

  const handleOpenNotification = (event) => {
    setAnchorNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorNotification(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Tooltip title="Notificaciones">
        <IconButton sx={{ p: 0 }} onClick={handleOpenNotification}>
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      {notifications.length > 0 && (
        <Menu
          sx={{ mt: "35px", height: "400px" }}
          id="menu-appbar"
          anchorEl={anchorNotification}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorNotification)}
          onClose={handleCloseNotification}
        >
          <List sx={{ width: "200px" }}>
            <ListSubheader sx={{ bgcolor: "#d9d9d9" }}>
              Notificaciones
            </ListSubheader>
            {notifications.map((item) => (
              <div key={item.id}>
                <Notification
                  key={item.id}
                  id={item.id}
                  nombre={item.name}
                  title={item.title}
                />
                <Divider />
              </div>
            ))}
          </List>
        </Menu>
      )}
      <Button
        sx={{ my: 2, color: "white", display: "block", ml: 3 }}
        onClick={desconectar}
      >
        Desconectar
      </Button>
    </Box>
  );
};

HeaderUser.propTypes = {
  desconectar: PropTypes.func.isRequired,
};

export default HeaderUser;
