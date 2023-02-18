import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { CardToShowSampleShort } from '../Components/CardToShowSampleShort';
import { CardsContainer } from '../Components/CardsContainer';
import dataReactWeb from '../data/dataReactWeb.json';

const ReactWebsites = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: '1rem' }}>
        React web apps <FontAwesomeIcon className="link-color" icon={faReact} />
      </Typography>

      <CardsContainer>
        {dataReactWeb.map(({title, id, shortDescription, img}) => (
          <Box>
            <Link
              to={`/react-websites/${title}`}
              key={id}
              style={{ textDecoration: 'none' }}
            >
              <CardToShowSampleShort
                key={id}
                title={title}
                description={shortDescription}
                img={img}
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
