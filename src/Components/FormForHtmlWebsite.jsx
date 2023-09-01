import React, { useState, useEffect } from 'react';

import { Container, TextField, Button, Alert } from '@mui/material';

export default function FormForHtmlWebsite() {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [imgUrl, setImgUrl] = useState('/img/{picture name}.png');
  const [description, setDescription] = useState();
  const [stackUsed, setStackUsed] = useState('HTML CSS JS');
  const [linkToWebsite, setLinkToWebsite] = useState();
  const [objectToSend, setObjectTosend] = useState();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const imgUrlChangeHandler = (e) => {
    setImgUrl(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const stackUsedChangeHandler = (e) => {
    setStackUsed(e.target.value);
  };
  const linkChangeHandler = (e) => {
    setLinkToWebsite(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const stackUsedToArray = stackUsed.split(' ');

    setObjectTosend({
      id,
      title,
      img: imgUrl,
      description,
      stack: stackUsedToArray,
      linkToWebsite,
    });

    setId('');
    setTitle('');
    setImgUrl('/img/{picture name}.png');
    setDescription('');
    setStackUsed('HTML CSS JS');
    setLinkToWebsite('');
  };

  useEffect(() => {
    if (!objectToSend) {
      return;
    }
    async function sendToDB() {
      try {
        const response = await fetch('change/when/addingDB', {
          method: 'post',
          body: JSON.stringify(objectToSend),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          setSuccess(true);
        } else {
          setErrorMessage('not OK');
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    sendToDB();
  }, [objectToSend]);

  return (
    <Container sx={{ width: '40vw', marginTop: '10vh' }}>
      {success && <Alert severity="success">Sample sent successfully!</Alert>}
      {errorMessage && <Alert severity="error">This is an error alert —{errorMessage}</Alert>}
      <form onSubmit={submitHandler}>
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="id" label="ID" variant="standard" onChange={idChangeHandler} value={id} />
          <TextField
            id="title"
            label="Title"
            variant="standard"
            onChange={titleChangeHandler}
            value={title}
          />
          <TextField
            id="img"
            label="Img url"
            variant="standard"
            onChange={imgUrlChangeHandler}
            value={imgUrl}
          />

          <TextField
            id="description"
            label="Description"
            variant="standard"
            onChange={descriptionChangeHandler}
            value={description}
          />
          <TextField
            id="stack"
            label="Stack used"
            variant="standard"
            onChange={stackUsedChangeHandler}
            value={stackUsed}
          />
          <TextField
            id="linkToWebsite"
            label="Link To Website"
            variant="standard"
            onChange={linkChangeHandler}
            value={linkToWebsite}
          />
          <Button type="submit">Submit</Button>
        </Container>
      </form>
    </Container>
  );
}
