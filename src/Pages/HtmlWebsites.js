import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import ContainerSimple from "../Components/ContainerSimple";
import CardToShowSample from "../Components/CardToShowSample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import config from "../config.json";

const HtmlWebsites = () => {
  const [samples, setSamples] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getData = async function() {
      setLoading(true);
      try {
        const response = await fetch(config.API_URL_HTML);
        const data = await response.json();

        const events = [];

        for (const key in data) {
          events.push({
            id: key,
            img: data[key].img,
            title: data[key].title,
            description: data[key].description,
            stack: data[key].stack,
            linkToWebsite: data[key].linkToWebsite,
            linkToCode: data[key].linkToCode,
          });

          if (!response.ok) {
            setLoading(false);
            throw new Error(response.status);
          }
        }
        setSamples(events);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    getData();
  }, []);

  return (
    <ContainerSimple>
      <Box sx={{ display: "flex", justifyContent: "start", margin: "1rem" }}>
        <Typography variant="h3">
          HTML websites{" "}
          <FontAwesomeIcon icon={faHtml5} className="link-color" />
        </Typography>
      </Box>

      {loading && (
        <Box sx={{ height: "40vh" }}>
          <CircularProgress color="success" />
        </Box>
      )}
      <Grid container gap={2} sx={{ justifyContent: "center" }}>
        {samples &&
          samples.map((sample) => (
            <Grid
              key={sample.id}
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <CardToShowSample
                  key={sample.id}
                  title={sample.title}
                  description={sample.description}
                  stack={sample.stack}
                  linkWebsite={sample.linkToWebsite}
                  linkCode={sample.linkToCode}
                  img={sample.img}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
      {errorMessage && (
        <Container>
          <Typography variant="h4">Sorry something went wrong</Typography>
          <Typography variant="h5">error status {errorMessage}</Typography>
        </Container>
      )}
    </ContainerSimple>
  );
};

export default HtmlWebsites;
