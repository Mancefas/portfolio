import React from 'react';

import { Typography } from '@mui/material';
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
        {dataHtmlWeb.map(({id, title, description, stack, linkToWebsite, linkToCode, img }) => (
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
    </>
  );
};
export default HtmlWebsites;
