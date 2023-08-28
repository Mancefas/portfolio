import React from 'react';

import { NavLink } from 'react-router-dom';
import { Box, Badge, Typography, Button, ButtonGroup } from '@mui/material';

import dataReactWeb from '../data/dataReactWeb.json';
import dataHtmlWeb from '../data/dataHtmlWeb.json';

const buttonsData = [
  { name: 'React', linksTo: '/react-websites', amount: `${dataReactWeb.length}` },
  { name: 'Html', linksTo: '/html-websites', amount: `${dataHtmlWeb.length}` },
  { name: 'Apps', linksTo: '/apps', amount: 0 },
];

function WorkSamplesMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        {buttonsData.map(({ name, linksTo, amount }) => (
          <Button key={name}>
            <NavLink
              to={linksTo}
              style={{ textDecoration: 'none', padding: '0.5rem' }}
              className="link-color"
            >
              <Badge badgeContent={amount} color="success">
                <Typography variant="h6">{name}</Typography>
              </Badge>
            </NavLink>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default WorkSamplesMenu;
