import React from "react";
import AppRoutes from "Routes";
import "./App.css";
import { SWRConfig } from "swr";

const App = () => {
  return (
    <SWRConfig value={{}}>
      <AppRoutes />
    </SWRConfig>
  );
};

export default App;
