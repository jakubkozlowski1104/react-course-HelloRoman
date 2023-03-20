import React from 'react';
import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StytledList, StyledWrapper } from './UsersList.styles';

const UsersList = () => (
  <StyledWrapper>
    <StytledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StytledList>
  </StyledWrapper>
);

export default UsersList;
