import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faReact,
  faMaxcdn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBookReader,
  faQuestionCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        minHeight: "85vh",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-around",
        justifyContent: "space-around",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
      className="text-primary"
    >
      <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
        What can I do for you <FontAwesomeIcon icon={faQuestionCircle} />
      </Typography>
      <Grid container gap={1} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={3}>
          <Container
            sx={{
              minHeight: "50vh",
              height: "fit-content",
              maxWidth: "50vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "9px",
              border: "3px",
            }}
            className="shadow-for-box container-background"
          >
            <Typography variant="h5">Static website</Typography>
            <Typography>Static web pages for you bussiness. </Typography>
            <Box>
              <Box sx={{ display: "flex" }}>
                <FontAwesomeIcon
                  size="2x"
                  className="link-color"
                  icon={faHtml5}
                  color="red"
                />
                <Typography>HTML</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FontAwesomeIcon
                  size="2x"
                  className="link-color"
                  icon={faCss3Alt}
                  color="red"
                />
                <Typography>CSS</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FontAwesomeIcon
                  size="2x"
                  className="link-color"
                  icon={faBootstrap}
                  color="red"
                />
                <Typography>Bootstrap</Typography>
              </Box>
            </Box>

            <Link to={`/html-websites`} style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ margin: "1rem" }}>
                Samples
              </Button>
            </Link>
          </Container>
        </Grid>
        <Grid item xs={12} md={3}>
          <Container
            sx={{
              minHeight: "50vh",
              height: "fit-content",
              maxWidth: "50vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "9px",
              border: "3px",
            }}
            className="shadow-for-box container-background"
          >
            <Typography variant="h5">Dynamic website</Typography>
            <Typography>
              Dynamic website or web app that reacts to user input.{" "}
            </Typography>

            <Box>
              <Box sx={{ display: "flex" }}>
                <FontAwesomeIcon
                  size="2x"
                  className="link-color"
                  icon={faReact}
                  color="red"
                />
                <Typography>React.js</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FontAwesomeIcon
                  size="2x"
                  className="link-color"
                  icon={faCss3Alt}
                  color="red"
                />
                <Typography>CSS</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FontAwesomeIcon
                  size="2x"
                  className="link-color"
                  icon={faMaxcdn}
                  color="red"
                />
                <Typography>Material UI</Typography>
              </Box>
            </Box>
            <Link to={`/react-websites`} style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ margin: "1rem" }}>
                Samples
              </Button>
            </Link>
          </Container>
        </Grid>
        <Grid item xs={12} md={3}>
          <Container
            sx={{
              minHeight: "50vh",
              height: "fit-content",
              maxWidth: "50vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "9px",
              border: "3px",
            }}
            className="shadow-for-box container-background"
          >
            <Typography variant="h5">Full stack website</Typography>
            <Typography>
              Dynamic website that reacts to user input, has its own API{" "}
            </Typography>
            <Box>
              <FontAwesomeIcon
                className="link-color"
                style={{ margin: "1rem" }}
                icon={faWindowClose}
                size="2x"
              />
              <FontAwesomeIcon
                className="link-color"
                style={{ margin: "1rem" }}
                icon={faBookReader}
                size="2x"
              />
            </Box>
            <Typography variant="h6">Still working on it</Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Plans;
