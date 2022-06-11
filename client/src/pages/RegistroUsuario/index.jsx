import React from "react";
import Box from "@mui/material/Box";
import IngresarUsuario from "components/IngresarUsuario";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
// import RegistroUsuario from "components/RegistroUsuario";

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const RegistroUsuario = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ minHeight: "82vh", display: "flex" }}>
      <Box
        sx={{
          bgcolor: "#005373",
          width: "40%",
          borderRadius: 6,
          margin: "auto",
          p: "0 100px",
        }}
      >
        <Typography sx={{ color: "#ffffff", mt: "20px", textAlign: "center" }}>
          COMPRADOR
        </Typography>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            ".MuiTabs-indicator": { bgcolor: "#ffffff" },
            button: { color: "#ffffff" },
          }}
        >
          <Tabs
            value={value}
            sx={{
              ".MuiTabs-flexContainer": { justifyContent: "center" },
              ".MuiButtonBase-root.MuiTab-root.Mui-selected": {
                color: "#ffffff",
              },
            }}
            onChange={handleChange}
          >
            <Tab label="INGRESAR" sx={{ color: "#ffffff" }} />
            <Tab label="REGISTRAR" sx={{ color: "#ffffff" }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <IngresarUsuario />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Esto es registar
        </TabPanel>
      </Box>
    </Box>
  );
};

export default RegistroUsuario;
