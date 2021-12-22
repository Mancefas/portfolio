import { useParams, Link } from "react-router-dom";
import React from "react";
import ContainerBox from "../Components/ContainerBox";
import { Typography, Box, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import CancelIcon from "@mui/icons-material/Cancel";
import dataReactWeb from "../store/dataReactWeb";

const WebsiteFullWriteUp = () => {
  let params = useParams();

  const website = dataReactWeb.find((el) => el.title === params.websiteName);

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
          <Grid item xs={4} md={1} sx={{ display: "flex", gap: "0.3rem" }}>
            <Typography>Coffee</Typography>
            <FontAwesomeIcon icon={faCoffee} />
          </Grid>
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
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Link to website
          </a>
        )}
        {website && website.linkToCode && (
          <a
            href={website.linkToCode}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Link to code
          </a>
        )}
      </Box>

      <Typography variant="h5">{website.longerTitle}</Typography>
      <Typography variant="subtitle1">{website.fullDescription}</Typography>
    </ContainerBox>
  );
};

export default WebsiteFullWriteUp;
