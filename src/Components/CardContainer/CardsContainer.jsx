import React from 'react';
import { node } from 'prop-types';

import './cards-container.css';

export default function CardsContainer({ children }) {
  return <div className="cards-container">{children}</div>;
}

CardsContainer.propTypes = {
  children: node.isRequired,
};
