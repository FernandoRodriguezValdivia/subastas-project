/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

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
