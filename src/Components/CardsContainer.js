import React, { Children } from 'react';

import './cards-container.css';

export const CardsContainer = ({ children }) => {
  return <div className="cards-container">{children}</div>;
};
