import React from 'react';

import { Container } from '@mui/material';

export default function ContainerBox({ children }) {
  return (
    <Container
      maxWidth="xl"
      className="container-background"
      sx={{
        padding: '1rem',
        marginTop: '3vh',
        height: 'fit-content',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '80vh',
        width: '85vw',
        borderRadius: '9px',
        marginBottom: '3vh',
      }}
    >
      {children}
    </Container>
  );
}
