import React from 'react';
import { string } from 'prop-types';

import { Card, CardHeader, CardMedia, CardContent, Typography, Box, Link } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

export default function CardToShowSample({
  title,
  img,
  description,
  stack,
  linkWebsite,
  linkCode,
}) {
  return (
    <Card
      className="text-primary"
      sx={{
        backgroundColor: '#ffffff9c',
        margin: '0 1rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <CardHeader title={title} />
      <CardMedia
        component="img"
        height="100"
        image={img || '/img/noPicture.jpg'}
        alt={`${title} logo`}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography className="text-primary" variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CodeIcon color="primary" size="small" />
          <Typography variant="p" color="primary">
            Languages used :
          </Typography>
          <CodeOffIcon color="primary" size="small" />
        </Box>
        {stack.map((stackItem) => (
          <Typography key={stackItem} variant="h6" sx={{ textAlign: 'center' }}>
            {stackItem}
          </Typography>
        ))}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {linkWebsite && (
            <Link
              className="link-color"
              rel="noopener noreferrer"
              href={linkWebsite}
              target="_blank"
              underline="hover"
            >
              Link to website
            </Link>
          )}
          {linkCode && (
            <Link
              className="link-color"
              rel="noopener noreferrer"
              href={linkCode}
              target="_blank"
              underline="hover"
              sx={{ marginTop: '0.5rem' }}
            >
              Link to code
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

CardToShowSample.propTypes = {
  title: string.isRequired,
  img: string.isRequired,
  description: string.isRequired,
  stack: string.isRequired,
  linkWebsite: string.isRequired,
  linkCode: string.isRequired,
};
