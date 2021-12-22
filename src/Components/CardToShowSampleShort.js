import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const CardToShowSampleShort = (props) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff9c" }}>
      <CardHeader title={props.title.replaceAll("-", " ")} />
      <CardMedia
        component="img"
        height="100"
        image={props.img ? props.img : "/img/noPicture.jpg"}
        alt=""
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
