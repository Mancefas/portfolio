import { useParams, Link } from "react-router-dom";
import React from "react";
import ContainerBox from "../Components/ContainerBox";
import { Typography, Box, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faReact } from "@fortawesome/free-brands-svg-icons";
import CancelIcon from "@mui/icons-material/Cancel";

const WebsiteFullWriteUp = () => {
  let params = useParams();
  const data = [
    {
      id: 1,
      title: "baltic-covid-news",
      img: "/img/balticNews.png",
      description:
        "Dynamic web app that shows statistics about Covid for Baltic states (Europe). The website uses 2 APIs to get the newest data.",
      stack: ["HTML", "CSS", "React", "Material UI"],
      linkToWebsite: "https://baltic-covid-news.netlify.app/",
      linkToCode: "https://github.com/Mancefas/covid-news",
    },
    {
      id: 2,
      title: "website-using-api",
      img: "",
      description:
        "Just a simple website for using mock/sample API data.Form has validation if no data is entered with a hint with what's needed. Submit button can be pressed only if the form is validated.",
      stack: ["HTML", "CSS", "React", "React-router", "Material UI"],
      linkToWebsite: "https://antra-ver.netlify.app/",
      linkToCode: "https://github.com/Mancefas/qualification-task",
    },
    {
      id: 3,
      title: "coffee-place-website",
      img: "/img/coffeeLogo.png",
      description:
        "E-commerce website made using react. On pressed navbar links - merchandise is sorted on-page. The dynamic cart shows items added, price and how many items are placed.",
      stack: ["HTML", "CSS", "React", "Material UI"],
      linkToWebsite: "https://coffee-place-e-comm.netlify.app/",
      linkToCode: "https://github.com/Mancefas/react-e-commerce",
    },
  ];

  const website = data.find((el) => el.title === params.websiteName);

  return (
    <ContainerBox>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={"/react-websites"}>
          <CancelIcon />
        </Link>
      </Box>
      <Typography variant="h3">
        {params.websiteName.replaceAll("-", " ")}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CodeIcon color="primary" size="small" />
        <Typography variant="p" color="primary">
          Languages used :
        </Typography>
        <CodeOffIcon color="primary" size="small" />
      </Box>
      {website && (
        <Grid container sx={{ justifyContent: "space-evenly" }}>
          {website.stack.map((stack, index) => (
            <Grid item xs={4} md={1}>
              <Typography
                key={index}
                variant="p"
                sx={{ textAlign: "center", marginRight: "0.3rem" }}
              >
                {stack}
              </Typography>
              <FontAwesomeIcon
                icon={
                  stack === "HTML"
                    ? faHtml5
                    : stack === "CSS"
                    ? faCss3
                    : stack === "React"
                    ? faReact
                    : ""
                }
                size="2x"
                color="primary"
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {website && website.linkToWebsite && (
          <a
            href={website.linkToWebsite}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Link to website
          </a>
        )}
        {website && website.linkToCode && (
          <a
            href={website.linkToCode}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Link to code
          </a>
        )}
      </Box>

      <Typography variant="h6">Some detailed text about project</Typography>
      <Typography variant="h6">
        Some more detailed text about project
      </Typography>
    </ContainerBox>
  );
};

export default WebsiteFullWriteUp;
