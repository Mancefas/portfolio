import React from 'react';
import { bool, string } from 'prop-types';

import { Card, CardMedia, Typography, Box } from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';

export default function CardToShowSampleShort({ title, img, description, showingApp = null }) {
  return (
    <Card
      className="text-primary sample-card"
      sx={{
        margin: '1rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Typography variant="h5" align="center">
        {title.replaceAll('-', ' ')}
      </Typography>
      <CardMedia
        component="img"
        height={`${showingApp ? '250' : '100'}`}
        image={img || '/img/noPicture.jpg'}
        alt={`${title} logo`}
        sx={{ objectFit: 'contain', padding: '1rem 0' }}
      />

      <Typography className="text-primary" variant="body2" color="text.secondary" align="center">
        {description}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0.5rem 0',
        }}
      >
        <Typography variant="paragraph" align="center">
          More info
        </Typography>
        <TouchAppIcon color="success" />
      </Box>
    </Card>
  );
}

CardToShowSampleShort.propTypes = {
  title: string.isRequired,
  img: string.isRequired,
  description: string.isRequired,
  showingApp: bool.isRequired,
};
