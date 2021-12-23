import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContainerSimple from "../Components/ContainerSimple";
import CardToShowSample from "../Components/CardToShowSample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const HtmlWebsites = () => {
  const data = [
    {
      id: 1,
      title: "Nordcarrier.lt forwarders website",
      img: "/img/Nordcarrier.png",
      description:
        "Website from scratch. Landing page, contact page, services page. SEO was optimized.",
      stack: ["HTML", "CSS", "JavaScript"],
      linkToWebsite: "https://nordcarrier.netlify.app/",
    },
    {
      id: 2,
      title: "Transport company page redesign",
      img: "",
      description:
        "The old website was built on PHP(don't know version...) and after hosting provider decided to update their system - website crashed. After some consideration, we had decided to renew the website. For time limitation I have used Bootstrap to make a new website with old content.",
      stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      linkToWebsite: "https://transpeda.lt/",
    },
    {
      id: 3,
      title: "TECHRENT",
      img: "",
      description:
        "Sample site for construction equipment renting company.Landing page with video.About section.Services we provide section.Our team section.Contact form.Footer with useful links",
      stack: ["HTML", "CSS"],
      linkToWebsite: "https://techrent.netlify.app/",
      linkToCode: "https://github.com/Mancefas/techrent",
    },
    {
      id: 4,
      title: "dviratis.info",
      img: "/img/dviratis.info.png",
      description:
        "Blog style website. With needed articles about bicycles for beginners. SEO optimized. All content is in Lithuanian language.",
      stack: ["HTML", "CSS", "JavaScript"],
      linkToWebsite: "http://sample.devportfolio.eu/",
    },
  ];
  return (
    <ContainerSimple>
      <Box sx={{ display: "flex", justifyContent: "start", margin: "1rem" }}>
        <Typography variant="h3">
          HTML websites <FontAwesomeIcon icon={faHtml5} color="#f06529" />
        </Typography>
      </Box>

      <Grid container gap={2} sx={{ justifyContent: "center" }}>
        {data.map((sample) => (
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
