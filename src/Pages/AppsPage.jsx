import React from 'react';

import { Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';

function AppsPage() {
  return (
    <>
      <Typography variant="h3" sx={{ margin: '1rem' }}>
        Mobile apps <FontAwesomeIcon icon={faMobilePhone} className="link-color" />
      </Typography>
      <Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ margin: '1rem' }}>
          Coming soon
        </Typography>
      </Box>
    </>
  );
}
export default AppsPage;
