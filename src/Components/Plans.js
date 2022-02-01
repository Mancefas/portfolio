import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookReader,
  faQuestionCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import dataPlans from "../data/dataPlans";
import Contact from "./Contact";

const Plans = () => {
  return (
    <>
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
          What can I do for you{" "}
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{ fontSize: "2.5rem" }}
          />
        </Typography>
        <Grid container gap={1} sx={{ justifyContent: "center" }}>
          {dataPlans.map((item) => (
            <Grid key={item.id} item xs={12} md={3}>
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
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Lora", fontWeight: "500" }}
                >
                  {item.id}
                </Typography>
                <Typography>{item.description}</Typography>
                <Box>
                  {item.iconsText.map((text, index) => (
                    <Box key={index} sx={{ display: "flex" }}>
                      <Typography
                        sx={{ fontFamily: "Lora", fontWeight: "500" }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Link
                  to={item.btnLink}
                  style={{ textDecoration: "none" }}
                  className="link-color"
                >
                  <Button
                    variant="contained"
                    sx={{ margin: "1rem" }}
                    className="btn-bg"
                  >
                    Samples
                  </Button>
                </Link>
              </Container>
            </Grid>
          ))}

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
              <Typography
                variant="h5"
                sx={{ fontFamily: "Lora", fontWeight: "500" }}
              >
                Full stack website
              </Typography>
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
      <Contact />
    </>
  );
};

export default Plans;
