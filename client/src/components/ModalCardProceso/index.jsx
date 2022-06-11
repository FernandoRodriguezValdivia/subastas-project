import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCardProceso = React.forwardRef((props, ref) => {
  return (
    <Box sx={style} ref={ref}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <Button onClick={props.handleClose}>Close Child Modal</Button>
    </Box>
  );
});

ModalCardProceso.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalCardProceso;
