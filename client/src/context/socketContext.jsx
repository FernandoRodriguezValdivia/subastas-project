/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, createContext } from "react";

import PropTypes from "prop-types";

import useSocket from "hooks/useSocket";
import { UserContext } from "./userContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:8000",
  );
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    if (isLogin) {
      conectarSocket();
    }
  }, [isLogin, conectarSocket]);

  useEffect(() => {
    if (!isLogin) {
      desconectarSocket();
    }
  }, [isLogin, desconectarSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
