import React from "react";
import { Container, Box, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import MouseIcon from "@mui/icons-material/Mouse";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Landing = () => {
  return (
    <Container maxWidth="large" sx={{ margin: "auto" }}>
      <Box
        sx={{
          minHeight: "80vh",
          width: "95vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
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
      </Box>
      <Container maxWidth="large" sx={{ margin: "auto", textAlign: "center" }}>
        <MailOutlineIcon sx={{ color: "#D2691E" }} />
        <Typography>mantvydasdev@gmail.com</Typography>
      </Container>
    </Container>
  );
};

export default Landing;
