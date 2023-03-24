import PropTypes from 'prop-types';
import React from 'react';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { StyledWrapper, StyledMainData } from './UserListItem.styles';
import Average from '../../atoms/Average/Average';

const UsersListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => {
  return (
    <StyledWrapper>
      <Average value={average} />
      <StyledMainData>
        <p className='name'>{name}</p>
        <p className='attendance'>attendance: {attendance}</p>
      </StyledMainData>
      <DeleteButton onClick={() => deleteUser(name)} />
    </StyledWrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
