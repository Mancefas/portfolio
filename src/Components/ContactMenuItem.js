import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button } from "@mui/material";
import ContactModal from "./ContactModal";

const WorkSamplesMenu = () => {
  //modal
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  //more menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClosePopupMenu = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MailOutlineIcon />
        Contact me <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClosePopupMenu} className="link-color">
          Contact Form
        </MenuItem>
        <a
          href="mailto:mantvydasdev@gmail.com"
          variant="text"
          style={{ textDecoration: "none" }}
        >
          <MenuItem onClick={handleClose}>
            Email - mantvydasdev@gmail.com{" "}
          </MenuItem>
        </a>
      </Menu>
      <ContactModal open={openModal} close={closeModal} />
    </Box>
  );
};

export default WorkSamplesMenu;
