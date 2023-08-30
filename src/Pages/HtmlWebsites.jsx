import React from 'react';

import { Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

import CardsContainer from '../Components/CardContainer/CardsContainer';
import CardToShowSample from '../Components/CardToShowSample';
import dataHtmlWeb from '../data/dataHtmlWeb.json';

function HtmlWebsites() {
  return (
    <Box sx={{ padding: '1rem 0 1rem 1rem' }}>
      <Typography variant="h3">
        HTML websites <FontAwesomeIcon icon={faHtml5} className="link-color" />
      </Typography>

      <CardsContainer>
        {dataHtmlWeb.map(({ id, title, description, stack, linkToWebsite, linkToCode, img }) => (
          <CardToShowSample
            key={id}
            title={title}
            description={description}
            stack={stack}
            linkWebsite={linkToWebsite}
            linkCode={linkToCode}
            img={img}
          />
        ))}
      </CardsContainer>
    </Box>
  );
}
export default HtmlWebsites;
