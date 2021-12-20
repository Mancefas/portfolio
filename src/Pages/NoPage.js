import { Container, Typography, Link } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlushed } from "@fortawesome/free-solid-svg-icons";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const NoPage = () => {
  return (
    <Container
      sx={{
        minheight: "90vh",
        height: "fit-content",
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">404</Typography>
      <FontAwesomeIcon icon={faFlushed} color="#df464675" size="4x" />
      <Typography variant="h3">No page like that</Typography>
      <Typography variant="h4">
        Contact me and I can make it
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          😁
        </span>
      </Typography>
      <MailOutlineIcon sx={{ color: "#D2691E", marginTop: "2rem" }} />
      <Typography>mantvydasdev@gmail.com</Typography>
      <Typography>
        <Link>Or just go to front page</Link>
      </Typography>
    </Container>
  );
};

export default NoPage;
