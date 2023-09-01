import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import CardToShowSampleShort from '../Components/CardToShowSampleShort';
import CardsContainer from '../Components/CardContainer/CardsContainer';
import dataReactWeb from '../data/dataReactWeb.json';

function ReactWebsites() {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h3">
        React web apps <FontAwesomeIcon className="link-color" icon={faReact} />
      </Typography>

      <CardsContainer>
        {dataReactWeb.map(({ title, id, shortDescription, img }) => (
          <Link to={`/react-websites/${title}`} key={id} style={{ textDecoration: 'none' }}>
            <CardToShowSampleShort
              key={id}
              title={title}
              description={shortDescription}
              img={img}
            />
          </Link>
        ))}
      </CardsContainer>

      <Outlet />
    </Box>
  );
}

export default ReactWebsites;
