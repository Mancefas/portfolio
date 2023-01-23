import React from 'react';

import { Container } from '@mui/material';

export const ContainerSimple = props => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '1rem',
        marginTop: '3vh',
        height: 'fit-content',
        marginBottom: '3vh',
        minHeight: '80vh',
        width: '85vw',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      {props.children}
    </Container>
  );
};
