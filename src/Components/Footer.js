import React from "react";
import { Typography, Grid, Avatar, Link } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PanToolIcon from "@mui/icons-material/PanTool";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Grid
      container
      sx={{
        width: "90vw",
        height: "fit-content",
        minHeight: "10vh",
        margin: "auto",
        borderTop: "2",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="https://github.com/Mancefas"
          target="_blank"
          underline="none"
        >
          <GitHubIcon fontSize="large" />
        </Link>

        <Link
          href="https://www.upwork.com/freelancers/~01d7e2eaf46aca380b?viewMode=1&s=1110580755057594368"
          target="_blank"
          underline="none"
        >
          <Avatar sx={{ bgcolor: "green" }}>Up</Avatar>
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CopyrightIcon />
        <Typography variant="h6">{year}</Typography>
        <Typography> All rights reserved</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
