import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";
import { SocketProvider } from "context/socketContext";
import { NotificationProvider } from "context/notificationContext";
import reportWebVitals from "./reportWebVitals";

import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <UserProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </UserProvider>
    </NotificationProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
