import React from 'react';

import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

import dataHtmlWeb from '../data/dataHtmlWeb';
import { CardsContainer } from '../Components/CardsContainer';
import { CardToShowSample } from '../Components/CardToShowSample';

const HtmlWebsites = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: '1rem' }}>
        HTML websites <FontAwesomeIcon icon={faHtml5} className="link-color" />
      </Typography>

      <CardsContainer>
        {dataHtmlWeb.map(sample => (
          <CardToShowSample
            key={sample.id}
            title={sample.title}
            description={sample.description}
            stack={sample.stack}
            linkWebsite={sample.linkToWebsite}
            linkCode={sample.linkToCode}
            img={sample.img}
          />
        ))}
      </CardsContainer>
    </>
  );
};
export default HtmlWebsites;
