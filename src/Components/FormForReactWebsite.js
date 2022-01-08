import React, { useState, useRef, useEffect } from "react";
import { Container, TextField, Button, Alert } from "@mui/material";

import config from "../config.json";

const FormForReactWebsite = () => {
  const [newReactWebsite, setNewReactWebsite] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const idRef = useRef();
  const titleRef = useRef();
  const imgRef = useRef();
  const imgBiggerReg = useRef();
  const shortDescriptionRef = useRef();
  const stackRef = useRef();
  const longerTitleRef = useRef();
  const fullDescriptionRef = useRef();
  const linkToWebsiteRef = useRef();
  const linkToCodeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const stackUsed = stackRef.current.value.split(" ");

    setNewReactWebsite({
      id: idRef.current.value,
      title: titleRef.current.value,
      img: imgRef.current.value,
      imgBigger: imgBiggerReg.current.value,
      shortDescription: shortDescriptionRef.current.value,
      stack: stackUsed,
      longerTitle: longerTitleRef.current.value,
      fullDescription: fullDescriptionRef.current.value,
      linkToWebsite: linkToWebsiteRef.current.value,
      linkToCode: linkToCodeRef.current.value,
    });

    //not reactish value change...
    idRef.current.value = "";
    titleRef.current.value = "";
    imgRef.current.value = "/img/{imgName}.png";
    imgBiggerReg.current.value = "/img/{imgName}.png";
    shortDescriptionRef.current.value = "";
    stackRef.current.value = "";
    longerTitleRef.current.value = "";
    fullDescriptionRef.current.value = "";
    linkToWebsiteRef.current.value = "";
    linkToCodeRef.current.value = "";
  };

  useEffect(() => {
    if (!newReactWebsite) {
      return;
    }
    async function sendSample() {
      try {
        const response = await fetch(config.API_URL_REACT, {
          method: "post",
          body: JSON.stringify(newReactWebsite),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          setSuccess(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setError(true);
      }
    }
    sendSample(newReactWebsite);
  }, [newReactWebsite]);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "40vw" }}>
      {success && <Alert severity="success">Sample sent successfully!</Alert>}
      {error && (
        <Alert severity="error">This is an error alert — {errorMessage}</Alert>
      )}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={submitHandler}
      >
        <TextField
          id="id"
          label="ID"
          variant="standard"
          type="number"
          inputRef={idRef}
        />
        <TextField
          id="title"
          label="Title"
          variant="standard"
          inputRef={titleRef}
        />
        <TextField
          id="img"
          label="Img url "
          variant="standard"
          inputRef={imgRef}
          defaultValue="/img/{imgName}.png"
        />
        <TextField
          id="imgBigger"
          label="Img Bigger url"
          variant="standard"
          inputRef={imgBiggerReg}
          defaultValue="/img/{imgName}.png"
        />
        <TextField
          id="shortDescription"
          label="Short Description"
          variant="standard"
          inputRef={shortDescriptionRef}
        />
        <TextField
          id="stack"
          label="Stack used"
          variant="standard"
          inputRef={stackRef}
        />
        <TextField
          id="longerTitle"
          label="Longer Title"
          variant="standard"
          inputRef={longerTitleRef}
        />
        <TextField
          id="fullDescription"
          label="Full Description"
          variant="standard"
          inputRef={fullDescriptionRef}
        />
        <TextField
          id="linkToWebsite"
          label="Link To Website"
          variant="standard"
          inputRef={linkToWebsiteRef}
        />
        <TextField
          id="linkToCode"
          label="Link To Code"
          variant="standard"
          inputRef={linkToCodeRef}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default FormForReactWebsite;
