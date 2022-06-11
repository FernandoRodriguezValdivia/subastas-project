import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";

const ModalCustom = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1500,
      }}
    >
      <Fade in={open} timeout={1000}>
        <DialogContent>{children}</DialogContent>
      </Fade>
    </Modal>
  );
};

ModalCustom.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalCustom;
