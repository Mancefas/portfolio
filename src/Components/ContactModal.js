import React, { useRef } from "react";
import { Container, Button, TextField, Typography, Modal } from "@mui/material";
import config from "../config.json";

import emailjs from "@emailjs/browser";

const ContactModal = (props) => {
  const form = useRef();

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
    props.close();
  };
  return (
    <Modal
      open={props.open}
      onClose={props.close}
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
  );
};

export default ContactModal;
