import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = ({ value }) => (
  <StyledAverage value={value}>
    <div>{value}</div>
  </StyledAverage>
);

export default Average;
