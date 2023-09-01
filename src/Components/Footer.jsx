import React from 'react';

import { Typography, Grid, Avatar, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';

import config from '../config.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Grid
      container
      sx={{
        width: '100%',
        height: 'fit-content',
        minHeight: '10vh',
        margin: 'auto',
        borderRadius: '9px',
        borderColor: '#fff',
      }}
      borderTop={1}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        <Link
          href={config.GITHUB_LINK}
          target="_blank"
          underline="none"
          rel="noreferrer"
          aria-label="github link"
        >
          <GitHubIcon fontSize="large" />
        </Link>

        <Link
          href={config.UPWORK_LINK}
          target="_blank"
          underline="none"
          rel="noreferrer"
          aria-label="upwork link"
        >
          <Avatar sx={{ bgcolor: 'green', height: '32px', width: '32px', fontSize: '1rem' }}>
            Up
          </Avatar>
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        <CopyrightIcon />
        <Typography variant="body2">{year}</Typography>
        <Typography variant="body2"> All rights reserved</Typography>
      </Grid>
    </Grid>
  );
}
