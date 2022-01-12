import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Box, Link, Switch } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = (props) => {
  return (
    <header>
      <Grid
        container
        sx={{
          minHeight: "12vh",
          height: "fit-content",
          width: "100%",
          borderRadius: "9px",
          margin: 0,
          borderColor: "#fff",
        }}
        borderBottom={1}
      >
        <Grid
          className="header-links"
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <NavLink
            className="link-color"
            style={({ isActive }) => {
              return {
                display: "block",
                backgroundColor: isActive ? "" : "#ffffffce",
                color: isActive ? "" : "black",
                padding: "0.3rem 0.5rem",
                borderRadius: "10PX",
                textDecoration: "none",
              };
            }}
            to={`/react-websites`}
          >
            React
          </NavLink>
          <NavLink
            className="link-color"
            style={({ isActive }) => {
              return {
                display: "block",
                backgroundColor: isActive ? "" : "#ffffffce",
                color: isActive ? "" : "black",
                padding: "0.3rem 0.5rem",
                borderRadius: "10PX",
                textDecoration: "none",
              };
            }}
            to={`/html-websites`}
          >
            Html
          </NavLink>
          <NavLink
            className="link-color"
            style={({ isActive }) => {
              return {
                display: "block",
                backgroundColor: isActive ? "" : "#ffffffce",
                color: isActive ? "" : "black",
                padding: "0.3rem 0.5rem",
                borderRadius: "10PX",
                textDecoration: "none",
              };
            }}
            to={`/wordpress-websites`}
          >
            Wordpress
          </NavLink>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <NavLink
            to={"/"}
            className={"text-primary"}
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className="logo">
              Mantvydas{" "}
              <BusinessCenterIcon className="link-color" fontSize="medium" />{" "}
            </h2>
          </NavLink>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <DarkModeIcon className="link-color" />
              <Switch
                defaultChecked
                label="Label"
                onChange={props.themeColorHandler}
                color="success"
              />{" "}
              <LightModeIcon className="link-color" />
            </Box>
            <Box>
              <Link
                className="link-color"
                href="mailto:mantvydasdev@gmail.com"
                underline="none"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MailOutlineIcon />
                mantvydasdev@gmail.com
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
