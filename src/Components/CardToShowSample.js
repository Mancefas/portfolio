import React from "react";

import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Link,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardToShowSample = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff9c" }}>
      <CardHeader title={props.title} />
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
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
              <Link href={props.linkWebsite} target="_blank">
                Link to website
              </Link>
            )}
            {props.linkCode && (
              <Link href={props.linkCode} target="_blank">
                Link to code
              </Link>
            )}
          </Box>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardToShowSample;
