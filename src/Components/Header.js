import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Box, Switch } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import WorkSamplesMenu from "./WorkSamplesMenu";

const Header = (props) => {
  return (
    <header>
      <Grid
        container
        sx={{
          minHeight: "12vh",
          height: "fit-content",
          width: "100%",
          borderRadius: "9px",
          margin: 0,
          borderColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "0.5rem",
        }}
        borderBottom={1}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <NavLink
            to={"/"}
            className={"text-primary"}
            style={{
              textDecoration: "none",
            }}
          >
            <h2 className="logo">
              Mantvydas{" "}
              <BusinessCenterIcon className="link-color" fontSize="medium" />{" "}
            </h2>
          </NavLink>
        </Grid>

        <Grid item xs={12} md={4}>
          <WorkSamplesMenu />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              {" "}
              <DarkModeIcon className="link-color" />
              <Switch
                defaultChecked
                label="Label"
                onChange={props.themeColorHandler}
                color="success"
              />{" "}
              <LightModeIcon className="link-color" />
            </Box>
          </Box>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* <MenuItem>
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", display: "flex" }}
            >
              <HomeWorkIcon />
              <Typography variant="paragraph" center>
                HOME
              </Typography>
            </NavLink>
          </MenuItem> */}
        </Box>
      </Grid>
    </header>
  );
};

export default Header;
