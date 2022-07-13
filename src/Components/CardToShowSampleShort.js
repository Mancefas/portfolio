import React from "react";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const CardToShowSampleShort = (props) => {
  return (
    <Card
      className={"text-primary"}
      sx={{ maxWidth: 345, backgroundColor: "#ffffff9c", padding: "1rem" }}
    >
      <Typography variant="h5">{props.title.replaceAll("-", " ")}</Typography>
      <CardMedia
        component="img"
        height="100"
        image={props.img ? props.img : "/img/noPicture.jpg"}
        alt={`${props.title} logo`}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          className={"text-primary"}
          variant="body2"
          color="text.secondary"
        >
          {props.description}
        </Typography>
        <Typography variant="paragraph">
          More info <TouchAppIcon color="success" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardToShowSampleShort;
