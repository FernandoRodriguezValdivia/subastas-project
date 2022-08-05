/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const NotificationContext = createContext(undefined);

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: "Celular", title: "Fuiste Superado", item: 1 },
  ]);

  const newNotification = (notification) => {
    const newNotifications = notifications.filter((ele) => {
      return String(ele.item) !== String(notification.item);
    });
    newNotifications.unshift(notification);
    setNotifications(newNotifications);
  };

  const deleteNotification = (id) => {
    const newNotifications = notifications.filter((ele) => {
      return String(ele.id) !== String(id);
    });

    setNotifications(newNotifications);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        newNotification,
        deleteNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NotificationProvider, NotificationContext };
