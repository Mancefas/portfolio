import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContainerBox from "../Components/ContainerBox";
import CardToShowSample from "../Components/CardToShowSample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const ReactWebsites = () => {
  const data = [
    {
      id: 1,
      title: "Baltic Covid news",
      img: "/img/balticNews.png",
      description:
        "Dynamic web app that shows statistics about Covid for Baltic states (Europe). The website uses 2 APIs to get the newest data.",
      stack: ["HTML", "CSS", "React", "Material UI"],
      linkToWebsite: "https://baltic-covid-news.netlify.app/",
      linkToCode: "https://github.com/Mancefas/covid-news",
    },
    {
      id: 2,
      title: "Website using API",
      img: "",
      description:
        "Just a simple website for using mock/sample API data.Form has validation if no data is entered with a hint with what's needed. Submit button can be pressed only if the form is validated.",
      stack: ["HTML", "CSS", "React", "React-router", "Material UI"],
      linkToWebsite: "https://antra-ver.netlify.app/",
      linkToCode: "https://github.com/Mancefas/qualification-task",
    },
    {
      id: 3,
      title: "Coffee place website",
      img: "/img/coffeeLogo.png",
      description:
        "E-commerce website made using react. On pressed navbar links - merchandise is sorted on-page. The dynamic cart shows items added, price and how many items are placed.",
      stack: ["HTML", "CSS", "React", "Material UI"],
      linkToWebsite: "https://coffee-place-e-comm.netlify.app/",
      linkToCode: "https://github.com/Mancefas/react-e-commerce",
    },
  ];

  return (
    <ContainerBox>
      <Box sx={{ display: "flex", justifyContent: "start", margin: "1rem" }}>
        <Typography variant="h3">
          React web apps <FontAwesomeIcon icon={faReact} color="#61DBFB" />
        </Typography>
      </Box>

      <Grid container gap={2} sx={{ justifyContent: "center" }}>
        {data.map((sample) => (
          <Grid item xs={12} md={3}>
            <CardToShowSample
              key={sample.id}
              title={sample.title}
              description={sample.description}
              stack={sample.stack}
              linkWebsite={sample.linkToWebsite}
              linkCode={sample.linkToCode}
              img={sample.img}
            />
          </Grid>
        ))}
      </Grid>
    </ContainerBox>
  );
};

export default ReactWebsites;
