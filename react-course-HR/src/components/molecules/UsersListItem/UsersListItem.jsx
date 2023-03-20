import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { StyledWrapper, StyledMainData } from './UserListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <StyledWrapper>
    <div>{average}</div>
    <StyledMainData>
      <p className='name'>{name}</p>
      <p className='attendance'>attendance: {attendance}</p>
    </StyledMainData>
    <Button />
  </StyledWrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
