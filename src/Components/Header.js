import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Typography, Grid, Box } from "@mui/material";
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
            className="nav-link"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "#d3602bb2" : "",
              };
            }}
            to={`/react-websites`}
          >
            REACT
          </NavLink>
          <NavLink
            className="nav-link"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "#d3602bb2" : "",
              };
            }}
            to={`/html-websites`}
          >
            HTML
          </NavLink>
          <NavLink
            className="nav-link"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "#d3602bb2" : "",
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
        <Link to={"/"} style={{ textDecoration: "none", color: "#333d51" }}>
          <Typography variant="h3">Mantvydas </Typography>
        </Link>
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
        <Button size="small" variant="outlined" color="primary">
          <MailOutlineIcon /> Contact me
        </Button>
      </Grid>
    </Grid>
    // </Container>
  );
};

export default Header;
