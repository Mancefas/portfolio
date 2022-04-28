import React, { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import ContactModal from "./ContactModal";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      sx={{
        minHeight: "10vh",
        marginBottom: "2rem",
        padding: "1rem",
        width: "fit-content",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
        <Typography variant="h4">You can contact me </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon />
          <Button variant="text" onClick={handleOpen} className="link-color">
            <MailOutlineIcon />
            Form
          </Button>
        </Box>
        <ContactModal open={open} close={handleClose} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon />
          <Button
            href="mailto:mantvydasdev@gmail.com"
            variant="text"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="link-color"
          >
            <AlternateEmailIcon />
            Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
