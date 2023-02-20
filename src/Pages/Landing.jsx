import React from 'react';

import { Box, Typography, Grid, Container } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Plans } from '../Components/Plans';
import { UAcard } from '../Components/UAcard';

// Icons are imported globaly in app.jsx
const languages = [
  { icon: 'fa-brands fa-html5', language: 'HTML', color: 'red' },
  { icon: 'fa-brands fa-css3-alt', language: 'CSS', color: 'blue' },
  { icon: 'fa-brands fa-js', language: 'JavaScript', color: '#F7DF1E' },
  { icon: 'fa-brands fa-sass', language: 'SASS', color: '#CE679A' },
  { icon: 'fa-brands fa-react', language: 'React.js', color: '#61DAFB' },
  { icon: 'fa-solid fa-n', language: 'Next.js', color: '#3F3F3F' },
  { icon: 'fa-solid fa-t', language: 'Typescript', color: '#0076C6' },
  { icon: 'fa-solid fa-s', language: 'Storybook', color: '#FF4785' },
  { icon: 'fa-brands fa-bootstrap', language: 'Bootstrap', color: '#7410F0' },
  { icon: 'fa-solid fa-m', language: 'Material UI', color: '#007FFF' },
  { icon: 'fa-solid fa-m', language: 'Mantine UI', color: '#339AF0' },
  {
    icon: 'fa-solid fa-font-awesome',
    language: 'Font Awesome',
    color: '#007FFF',
  },
];

export function Landing() {
  return (
    <>
      <UAcard />
      <Container maxWidth="md" sx={{ marginTop: '1rem' }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: 'Lora', fontWeight: '500', textAlign: 'center' }}
        >
          Hello and welcome !
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Lora',
            fontWeight: '500',
            textAlign: 'center',
            my: '1rem',
          }}
        >
          I am Front-end developer from EU. I can build you a fast and stable website in a
          manageable time frame. Specializing in react.js, but like to code in HTML,CSS, Bootstrap
          as well.
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontFamily: 'Lora', fontWeight: '500', textAlign: 'center' }}
        >
          I can build websites SEO optimized and content optimized(for speed). And all websites I
          build are mobile-friendly (responsive).
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <CodeIcon fontSize="large" color="primary" />
          <Typography variant="h5" sx={{ fontFamily: 'Lora', my: '1rem' }}>
            Coding with
          </Typography>
          <CodeOffIcon fontSize="large" color="primary" />
        </Box>

        <Grid container spacing={1} sx={{ justifyContent: 'space-evenly', margin: 'auto' }}>
          {languages.map(({ language, icon, color }) => (
            <Grid
              key={language}
              item
              xs={4}
              md={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon icon={icon} size="3x" color={color} />
              <Typography>{language}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Plans />
    </>
  );
}

export default Landing;
