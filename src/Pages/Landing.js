import React from "react";
import { Container, Box, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import MouseIcon from "@mui/icons-material/Mouse";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Landing = () => {
  return (
    <Container
      className="container-background"
      maxWidth="large"
      sx={{
        margin: "auto",
        height: "80vh",
        width: "95vw",
        marginTop: "2vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "9px",
      }}
    >
      <Typography variant="h3">
        Mantvydas made websites and work samples
      </Typography>
      <Typography variant="h5">
        Front end website developer based in EU
      </Typography>
      <Box>
        <DevicesIcon fontSize="large" color="success" />
        <MouseIcon fontSize="medium" color="success" />
      </Box>
      <Container maxWidth="large" sx={{ margin: "0", textAlign: "center" }}>
        <MailOutlineIcon sx={{ color: "#D2691E" }} />
        <Typography>mantvydasdev@gmail.com</Typography>
      </Container>
    </Container>
  );
};

export default Landing;
