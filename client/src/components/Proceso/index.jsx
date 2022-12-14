import React from "react";
import Box from "@mui/material/Box";
import CardProceso from "components/CardProceso";
import Typography from "@mui/material/Typography";
import useSWR from "swr";

import config from "../../config";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Proceso = () => {
  const { data } = useSWR(`${config.urlBase}/api/item/all`, fetcher);
  return (
    <Box sx={{ bgcolor: "#005373", pb: 15 }}>
      <Typography
        variant="h1"
        sx={{
          p: 3,
          fontWeight: "600",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        EN PROCESO
      </Typography>
      <Box
        sx={{
          p: "0 80px",
          display: "grid",
          gap: "40px",
          gridAutoRows: "22rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {data?.items.map((item) => (
          <CardProceso
            key={item.id}
            nombre={item.name}
            precio={item.initialPrice}
            url={item.imageUrl}
            detalles={item.description}
            id={item.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Proceso;
