import React from "react";
import { Container } from "@mui/material";

const ContainerBox = (props) => {
  return (
    <Container
      className="container-background"
      maxWidth="xl"
      sx={{
        padding: "1rem",
        marginTop: "3vh",
        height: "fit-content",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "80vh",
        width: "85vw",
        borderRadius: "9px",
        marginBottom: "3vh",
      }}
    >
      {props.children}
    </Container>
  );
};

export default ContainerBox;
