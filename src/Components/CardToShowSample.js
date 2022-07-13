import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const CardToShowSample = (props) => {
  return (
    <Card
      className={"text-primary"}
      sx={{ maxWidth: 345, backgroundColor: "#ffffff9c" }}
    >
      <CardHeader title={props.title} />
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
      </CardContent>

      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CodeIcon color="primary" size="small" />
          <Typography variant="p" color="primary">
            Languages used :
          </Typography>
          <CodeOffIcon color="primary" size="small" />
        </Box>
        {props.stack.map((stack, index) => (
          <Typography key={index} variant="h6" sx={{ textAlign: "center" }}>
            {stack}
          </Typography>
        ))}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {props.linkWebsite && (
            <Link
              className="link-color"
              rel="noopener noreferrer"
              href={props.linkWebsite}
              target="_blank"
              underline="hover"
            >
              Link to website
            </Link>
          )}
          {props.linkCode && (
            <Link
              className="link-color"
              rel="noopener noreferrer"
              href={props.linkCode}
              target="_blank"
              underline="hover"
              sx={{ marginTop: "0.5rem" }}
            >
              Link to code
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardToShowSample;
