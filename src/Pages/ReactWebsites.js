import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ContainerSimple from "../Components/ContainerSimple";
import CardToShowSampleShort from "../Components/CardToShowSampleShort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import dataReactWeb from "../store/dataReactWeb";

const ReactWebsites = () => {
  return (
    <ContainerSimple>
      <Box sx={{ display: "flex", justifyContent: "start", margin: "1rem" }}>
        <Typography variant="h3">
          React web apps{" "}
          <FontAwesomeIcon className="link-color" icon={faReact} />
        </Typography>
      </Box>

      <Grid container gap={2} sx={{ justifyContent: "center" }}>
        {dataReactWeb.map((sample) => (
          <Grid
            key={sample.id}
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Link
                to={`/react-websites/${sample.title}`}
                key={sample.id}
                style={{ textDecoration: "none" }}
              >
                <CardToShowSampleShort
                  key={sample.id}
                  title={sample.title}
                  description={sample.shortDescription}
                  img={sample.img}
                />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </ContainerSimple>
  );
};

export default ReactWebsites;
