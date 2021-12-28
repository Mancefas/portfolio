import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContainerSimple from "../Components/ContainerSimple";
import CardToShowSample from "../Components/CardToShowSample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import dataHtmlWeb from "../store/dataHtmlWeb";

const HtmlWebsites = () => {
  return (
    <ContainerSimple>
      <Box sx={{ display: "flex", justifyContent: "start", margin: "1rem" }}>
        <Typography variant="h3">
          HTML websites{" "}
          <FontAwesomeIcon icon={faHtml5} className="link-color" />
        </Typography>
      </Box>

      <Grid container gap={2} sx={{ justifyContent: "center" }}>
        {dataHtmlWeb.map((sample) => (
          <Grid
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
    </ContainerSimple>
  );
};

export default HtmlWebsites;
