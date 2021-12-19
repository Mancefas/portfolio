import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Header = () => {
  return (
    // <Container
    //   width="false"
    //   className="container-background"
    //   sx={{ minHeight: "12vh", height: "fit-contetn", width: "100vw" }}
    // >
    <Grid
      container
      sx={{
        minHeight: "12vh",
        height: "fit-contetn",
        width: "100%",
        borderRadius: "9px",
        margin: 0,
      }}
      borderBottom={2}
    >
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BusinessCenterIcon />
          <Typography className="text-color">MY WORK</Typography>
          <BusinessCenterIcon />
        </Box>
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
          <Button variant="text">React</Button>
          <Button variant="text">HTML</Button>
          <Button variant="text">Wordpress</Button>
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
        <Typography variant="h3">Mantvydas </Typography>
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
