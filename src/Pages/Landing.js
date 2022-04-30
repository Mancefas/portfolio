import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
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
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";

import Plans from "../Components/Plans";
import { UAcard } from "../Components/UAcard";

const Landing = () => {
  return (
    <>
      <UAcard />
      <Container maxWidth="md" sx={{ marginTop: "1rem" }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Lora", fontWeight: "500", textAlign: "center" }}
        >
          Hello and welcome !
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Lora",
            fontWeight: "500",
            textAlign: "center",
            my: "1rem",
          }}
        >
          I am Front-end developer from EU. I can build you a fast and stable
          website in a manageable time frame. Specializing in react.js, but like
          to code in HTML,CSS, Bootstrap as well.
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Lora", fontWeight: "500", textAlign: "center" }}
        >
          I can build websites SEO optimized and content optimized(for speed).
          And all websites I build are mobile-friendly (responsive).
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <CodeIcon fontSize="large" color="primary" />
          <Typography variant="h5" sx={{ fontFamily: "Lora", my: "1rem" }}>
            Coding languages
          </Typography>
          <CodeOffIcon fontSize="large" color="primary" />
        </Box>

        <Grid
          container
          spacing={1}
          sx={{ justifyContent: "space-evenly", margin: "auto" }}
        >
          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faHtml5} size="3x" color="red" />
            <Typography>HTML</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faCss3} size="3x" color="blue" />
            <Typography>CSS</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" />
            <Typography>JavaScript</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faSass} size="3x" color="#CE679A" />
            <Typography>SASS</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />
            <Typography>React</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faBootstrap} size="3x" color="#7410F0" />
            <Typography>Bootstrap</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faMaxcdn} size="3x" color="#007FFF" />
            <Typography>Material UI</Typography>
          </Grid>

          <Grid item xs={4} md={1}>
            <FontAwesomeIcon icon={faFontAwesome} size="3x" color="#007FFF" />
            <Typography>Font awesome</Typography>
          </Grid>
        </Grid>
      </Container>

      <Plans />
    </>
  );
};

export default Landing;
