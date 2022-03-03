import React from "react";
import { Container } from "@mui/material";
import styles from "./UAcard.module.css";

export const UAcard = () => {
  return (
    <>
      <Container
        className={styles.container}
        maxWidth="sm"
        sx={{
          minHeight: "10vh",
          height: "fit-content",
          marginTop: "1.5rem",
          borderRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <p className={styles.text}>I don't work with russia</p>
        </div>
      </Container>
    </>
  );
};
