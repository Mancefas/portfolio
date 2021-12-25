import { Container, Typography } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Container
      sx={{
        minheight: "100vh",
        height: "fit-content",
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Typography variant="h1">404</Typography>
      <FontAwesomeIcon icon={faGhost} color="#df464675" size="4x" />
      <Typography variant="h3">No page like that</Typography>
      <Typography variant="h4">
        Contact me and I can make it
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          😁
        </span>
      </Typography>
      <MailOutlineIcon sx={{ color: "#D2691E", marginTop: "2rem" }} />
      <Typography>mantvydasdev@gmail.com</Typography>
      <Link to="/">Or just go to front page</Link>
    </Container>
  );
};

export default NoPage;
