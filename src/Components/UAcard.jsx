import React from 'react';

import { Container } from '@mui/material';

import styles from './UAcard.module.css';

export const UAcard = () => {
  return (
    <>
      <Container
        className={styles.container}
        sx={{
          minWidth: '15vw',
          width: 'fit-content',
          minHeight: '5vh',
          height: 'fit-content',
          marginTop: '1.5rem',
          borderRadius: '7px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <p className={styles.text}>I don't work</p>
        </div>
        <div>
          <p className={styles.text2}>with Russia</p>
        </div>
      </Container>
    </>
  );
};
