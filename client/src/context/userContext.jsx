/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, name: "Celular", title: "Fuiste Superado" },
    { id: 2, name: "Cuadro", title: "Fuiste Superado" },
    { id: 3, name: "Libro", title: "Ganaste" },
    { id: 4, name: "Zapatilla", title: "Fuiste superado" },
    { id: 5, name: "Libro", title: "Ganaste" },
    { id: 6, name: "Libro", title: "Ganaste" },
  ]);

  const Initialize = () => {
    if (localStorage.getItem("token")) {
      setUser({
        token: localStorage.getItem("token"),
        name: localStorage.getItem("name"),
        type: localStorage.getItem("type"),
        id: localStorage.getItem("id"),
      });
      setIsLogin(true);
    }
  };

  useEffect(() => {
    Initialize();
  }, []);

  const ChangeTokenState = (tokenValue, nameValue, typeValue, idValue) => {
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("name", nameValue);
    localStorage.setItem("type", typeValue);
    localStorage.setItem("id", idValue);
    setUser({
      ...user,
      token: tokenValue,
      name: nameValue,
      type: typeValue,
      id: idValue,
    });
    setIsLogin(true);
  };

  const ClearTokenState = () => {
    localStorage.clear();
    setUser({});
    setIsLogin(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLogin,
        user,
        setUser,
        ChangeTokenState,
        ClearTokenState,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
