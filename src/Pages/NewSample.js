import React, { useState } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import FormForReactWebsite from "../Components/FormForReactWebsite";
import FormForHtmlWebsite from "../Components/FormForHtmlWebsite";

const drawerWidth = 240;

export default function NewSample() {
  const [showReactFrom, setShowReactForm] = useState(false);
  const [showHtmlFrom, setShowhtmlForm] = useState(false);

  const reactPresshandler = () => {
    setShowReactForm(true);
    setShowhtmlForm(false);
  };
  const htmlPressHandler = () => {
    setShowhtmlForm(true);
    setShowReactForm(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add new website sample
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button onClick={reactPresshandler}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faReact} />
            </ListItemIcon>
            <ListItemText>React</ListItemText>
          </ListItem>

          <ListItem button onClick={htmlPressHandler}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHtml5} />
            </ListItemIcon>
            <ListItemText>Html</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {showReactFrom && <FormForReactWebsite />}
        {showHtmlFrom && <FormForHtmlWebsite />}
      </Box>
    </Box>
  );
}
