import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Grid, Typography, Button, Box } from '@mui/material';

import dataPlans from '../data/dataPlans.json';

export default function Plans() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        minHeight: '85vh',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
        justifyContent: 'space-around',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
      className="text-primary"
    >
      <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
        What can I do for you?
      </Typography>
      <Grid container gap={1} sx={{ justifyContent: 'center' }}>
        {dataPlans.map(({ id, description, iconsText, btnLink, textInsteadOfBtn }) => (
          <Grid key={id} item xs={12} md={3}>
            <Container
              sx={{
                minHeight: '50vh',
                height: 'fit-content',
                maxWidth: '70vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: '9px',
                border: '3px',
              }}
              className="shadow-for-box container-background"
            >
              <Typography variant="h5" sx={{ fontFamily: 'Lora', fontWeight: '500' }}>
                {id}
              </Typography>
              <Typography>{description}</Typography>
              <Box>
                {iconsText.map((text) => (
                  <Box key={text} sx={{ display: 'flex' }}>
                    <Typography sx={{ fontFamily: 'Lora', fontWeight: '500' }}>{text}</Typography>
                  </Box>
                ))}
              </Box>
              {textInsteadOfBtn ? (
                <Typography variant="h6">{textInsteadOfBtn}</Typography>
              ) : (
                <Link to={btnLink} style={{ textDecoration: 'none' }} className="link-color">
                  <Button variant="contained" sx={{ margin: '1rem' }} className="btn-bg">
                    Samples
                  </Button>
                </Link>
              )}
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
