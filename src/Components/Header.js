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
        height: "fit-contetn",
        width: "100%",
        borderRadius: "9px",
        margin: 0,
        borderColor: "#fff",
      }}
      borderBottom={1}
    >
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "1rem",
            margin: "0",
          }}
        >
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
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
                margin: "1rem 0",
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
                margin: "1rem 0",
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
        </Box>
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
