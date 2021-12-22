import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Grid, Box, Link } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Header = () => {
  return (
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
          style={({ isActive }) => {
            return {
              display: "block",
              color: "#333d51",
              backgroundColor: isActive ? "" : "#ffffffce",
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
          style={({ isActive }) => {
            return {
              display: "block",
              color: "#333d51",
              backgroundColor: isActive ? "" : "#ffffffce",
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
          style={({ isActive }) => {
            return {
              display: "block",
              color: "#333d51",
              backgroundColor: isActive ? "" : "#ffffffce",
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
          style={{
            textDecoration: "none",
            color: "#333d51",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h3">Mantvydas </Typography>
            <BusinessCenterIcon fontSize="large" />
          </Box>
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
        }}
      >
        <Link
          href="mailto:mantvydasdev@gmail.com"
          underline="none"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#333d51",
          }}
        >
          <MailOutlineIcon sx={{ color: "#ffffffce" }} />
          mantvydasdev@gmail.com
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
