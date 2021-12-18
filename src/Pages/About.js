import { Container, Typography, Box, Grid } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faBootstrap,
  faReact,
  faMaxcdn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <Container
      className="container-background"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "1rem",
        marginTop: "5vh",
        height: "fit-content",
        minHeight: "90vh",
        width: "85vw",
        borderRadius: "9px",
        marginBottom: "2rem",
      }}
    >
      <Typography variant="h3">About me</Typography>
      <Typography variant="h5">
        I can help you with your website needs. I can build you a fast and
        stable website in a manageable time frame. Specializing in react.js, but
        like to code in HTML as well.
      </Typography>
      <Typography variant="h5">
        I build all my websites SEO optimized and content optimized(for speed).
        And all websites are mobile-friendly (responsive).
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CodeIcon fontSize="large" color="primary" />
        <Typography variant="h3">Coding languages</Typography>
        <CodeOffIcon fontSize="large" color="primary" />
      </Box>

      <Grid container spacing={1} sx={{ justifyContent: "space-evenly" }}>
        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faHtml5} size="4x" color="red" />
          <Typography>HTML</Typography>
        </Grid>

        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faCss3} size="4x" color="blue" />
          <Typography>CSS</Typography>
        </Grid>

        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faJs} size="4x" color="#F7DF1E" />
          <Typography>JavaScript</Typography>
        </Grid>

        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faSass} size="4x" color="#CE679A" />
          <Typography>SASS</Typography>
        </Grid>

        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faBootstrap} size="4x" color="#7410F0" />
          <Typography>Bootstrap</Typography>
        </Grid>

        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faReact} size="4x" color="#61DAFB" />
          <Typography>React</Typography>
        </Grid>

        <Grid item xs={4} md={1}>
          <FontAwesomeIcon icon={faMaxcdn} size="4x" color="#007FFF" />
          <Typography>Material UI</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
