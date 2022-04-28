import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";

const WorkSamplesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
        Website samples <ArrowDropDownIcon />
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
        <NavLink
          to={`/react-websites`}
          style={{ textDecoration: "none" }}
          className="link-color"
        >
          <MenuItem onClick={handleClose}>React</MenuItem>
        </NavLink>
        <NavLink to="/html-websites" style={{ textDecoration: "none" }}>
          {" "}
          <MenuItem onClick={handleClose}>HTML</MenuItem>{" "}
        </NavLink>
        <NavLink to="/wordpress-websites" style={{ textDecoration: "none" }}>
          {" "}
          <MenuItem onClick={handleClose}>Wordpress</MenuItem>{" "}
        </NavLink>
      </Menu>
    </Box>
  );
};

export default WorkSamplesMenu;
