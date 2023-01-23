import React from 'react';

import { NavLink } from 'react-router-dom';
import { Box, Badge, Typography, Button, ButtonGroup } from '@mui/material';

import dataReactWeb from '../data/dataReactWeb';
import dataHtmlWeb from '../data/dataHtmlWeb';

export const WorkSamplesMenu = () => {
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
        <Button>
          <NavLink
            to={`/react-websites`}
            style={{ textDecoration: 'none', padding: '0.5rem' }}
            className="link-color"
          >
            <Badge badgeContent={dataReactWeb.length} color="success">
              <Typography variant="h6">React</Typography>
            </Badge>
          </NavLink>
        </Button>
        <Button>
          <NavLink
            to="/html-websites"
            style={{ textDecoration: 'none', padding: '0.5rem' }}
          >
            {' '}
            <Badge badgeContent={dataHtmlWeb.length} color="success">
              <Typography variant="h6">Html</Typography>
            </Badge>
          </NavLink>
        </Button>
      </ButtonGroup>
    </Box>
  );
};
