import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Typography, Box, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CancelIcon from '@mui/icons-material/Cancel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import ContainerBox from '../Components/ContainerBox';
import NoPage from './NoPage';
import dataReactWeb from '../data/dataReactWeb.json';
import dataApp from '../data/dataApps.json';

export default function WebsiteFullWriteUp() {
  const params = useParams();
  const [website, setWebsite] = useState(null);

  useEffect(() => {
    const webPage = dataReactWeb.find((el) => el.title === params.websiteName);
    const app = dataApp.find((el) => el.title === params.websiteName);

    if (webPage) {
      setWebsite(webPage);
    } else if (app) {
      setWebsite(app);
    } else {
      setWebsite('None');
    }
  }, []);

  if (website === 'None') {
    return <NoPage />;
  }

  const getIconForStack = (stack) => {
    if (stack === 'HTML') {
      return faHtml5;
    }
    if (stack === 'CSS') {
      return faCss3;
    }
    if (stack === 'React') {
      return faReact;
    }
    return '';
  };

  return (
    <>
      {!website && <h3>loading</h3>}
      {website && (
        <ContainerBox>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/react-websites">
              <CancelIcon />
            </Link>
          </Box>
          <Typography variant="h3">{params.websiteName.replaceAll('-', ' ')}</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0.5rem' }}>
            <CodeIcon color="primary" size="small" />
            <Typography variant="p" color="primary">
              Languages used :
            </Typography>
            <CodeOffIcon color="primary" size="small" />
          </Box>
          {website && (
            <Grid
              container
              sx={{
                justifyContent: 'space-evenly',
                border: ' solid 1.5px',
                borderRadius: '7px',
                margin: 'auto',
                minWidth: '50%',
                width: 'fit-content',
                padding: '0.5rem',
              }}
            >
              {website.stack.map((stack) => (
                <Grid
                  key={stack}
                  item
                  xs={4}
                  md={1}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    key={stack}
                    variant="p"
                    sx={{ textAlign: 'center', marginRight: '0.3rem' }}
                  >
                    {stack}
                  </Typography>
                  <FontAwesomeIcon icon={getIconForStack(stack)} size="2x" color="primary" />
                </Grid>
              ))}
              <Grid
                item
                xs={4}
                md={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem',
                }}
              >
                <Typography>Coffee</Typography>
                <FontAwesomeIcon icon={faCoffee} />
              </Grid>
            </Grid>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '1rem',
              margin: '1rem',
            }}
          >
            {website && website.linkToWebsite && (
              <a
                href={website.linkToWebsite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', fontSize: '1.2rem' }}
              >
                Link to website
              </a>
            )}
            {website && website.linkToCode && (
              <a
                href={website.linkToCode}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', fontSize: '1.2rem' }}
              >
                Link to code
              </a>
            )}
          </Box>

          <Box sx={{ marginBottom: '1rem' }}>
            <Typography variant="h5">{website.longerTitle}</Typography>
            <Typography variant="subtitle1" sx={{ width: '75%', margin: 'auto' }}>
              {website.fullDescription}
            </Typography>
          </Box>

          {website.imgBigger && (
            <img
              height="300"
              width="auto"
              src={website.imgBigger}
              alt=""
              loading="lazy"
              style={{ objectFit: 'contain', marginBottom: '0.5rem' }}
            />
          )}

          {website.anotherBiggerImg && (
            <img
              height="300"
              width="auto"
              src={website.anotherBiggerImg}
              alt=""
              loading="lazy"
              style={{ objectFit: 'contain', marginBottom: '0.5rem' }}
            />
          )}
        </ContainerBox>
      )}
    </>
  );
}
