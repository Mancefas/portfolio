import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContainerSimple from "../Components/ContainerSimple";
import CardToShowSample from "../Components/CardToShowSample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

const WordPressWebsites = () => {
  const data = [
    {
      id: 1,
      title: "Minant.lt",
      img: "/img/minant.lt.png",
      description:
        "This website was build from the start (scratch) using Wordpress with Elementor. It has SEO optimized content.",
      stack: [
        "Wordpress",
        "Elementor",
        "Logo was made using Canva",
        "Custom color pallet was created",
      ],
      linkToWebsite: "https://minant.lt/",
    },
  ];

  return (
    <ContainerSimple>
      <Box sx={{ display: "flex", justifyContent: "start", margin: "1rem" }}>
        <Typography variant="h3" className="text-font-secondary">
          Wordpress sites <FontAwesomeIcon icon={faWordpress} color="#21759b" />
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

export default WordPressWebsites;
