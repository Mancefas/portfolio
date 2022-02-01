import React, { useState, useRef } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import config from "../config.json";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.CONTACT_SERVICE_ID,
        config.CONTACT_TEMPLATE_ID,
        form.current,
        config.CONTACT_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpen(false);
  };

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ marginTop: "15vh" }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ minWidth: "30vw", width: "fit-content", margin: "auto" }}
          className="container-background"
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "1rem",
              borderRadius: "9px",
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: "Lora" }}>
              Contact me
            </Typography>

            <TextField
              label={"Your Name"}
              margin="normal"
              name="user_name"
              required
            ></TextField>
            <TextField
              label={"Your email"}
              margin="normal"
              name="user_email"
              type="email"
              required
            ></TextField>
            <TextField
              label={"Your question or suggestion "}
              margin="normal"
              multiline
              name="message"
              required
            ></TextField>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </Container>
        </form>
      </Modal>
    </Container>
  );
};

export default Contact;
