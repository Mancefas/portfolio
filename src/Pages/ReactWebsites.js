import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Box, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { CardToShowSampleShort } from '../Components/CardToShowSampleShort';
import dataReactWeb from '../data/dataReactWeb';
import { CardsContainer } from '../Components/CardsContainer';

const ReactWebsites = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: '1rem' }}>
        React web apps <FontAwesomeIcon className="link-color" icon={faReact} />
      </Typography>

      <CardsContainer>
        {dataReactWeb.map(sample => (
          <Box>
            <Link
              to={`/react-websites/${sample.title}`}
              key={sample.id}
              style={{ textDecoration: 'none' }}
            >
              <CardToShowSampleShort
                key={sample.id}
                title={sample.title}
                description={sample.shortDescription}
                img={sample.img}
              />
            </Link>
          </Box>
        ))}
      </CardsContainer>

      <Outlet />
    </>
  );
};

export default ReactWebsites;
