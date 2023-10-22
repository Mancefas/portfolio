import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';

import dataApps from '../data/dataApps.json';
import CardToShowSampleShort from '../Components/CardToShowSampleShort';
import CardsContainer from '../Components/CardContainer/CardsContainer';

function AppsPage() {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h3" sx={{ margin: '1rem' }}>
        Mobile apps <FontAwesomeIcon icon={faMobilePhone} className="link-color" />
      </Typography>
      <CardsContainer>
        {dataApps.map(({ title, id, shortDescription, img }) => (
          <Link to={`/apps/${title}`} key={id} style={{ textDecoration: 'none' }}>
            <CardToShowSampleShort
              key={id}
              title={title}
              description={shortDescription}
              img={img}
              showingApp
            />
          </Link>
        ))}
      </CardsContainer>

      <Outlet />
    </Box>
  );
}
export default AppsPage;
