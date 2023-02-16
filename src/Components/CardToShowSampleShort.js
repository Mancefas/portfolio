import React from 'react';

import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';

export const CardToShowSampleShort = ({ title, img, description }) => {
  return (
    <Card
      className={'text-primary'}
      sx={{
        backgroundColor: '#ffffff9c',
        margin: '0 1rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" align="center">
        {title.replaceAll('-', ' ')}
      </Typography>
      <CardMedia
        component="img"
        height="100"
        image={img ? img : '/img/noPicture.jpg'}
        alt={`${title} logo`}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ marginTop: 'auto' }}>
        <Typography
          className={'text-primary'}
          variant="body2"
          color="text.secondary"
          align="center"
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="paragraph" align="center">
            More info
          </Typography>
          <TouchAppIcon color="success" />
        </Box>
      </CardContent>
    </Card>
  );
};
