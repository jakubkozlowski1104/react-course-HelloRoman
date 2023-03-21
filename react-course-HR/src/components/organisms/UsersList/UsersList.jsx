import { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StytledList, StyledWrapper } from './UsersList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 1000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filtersUsers = users.filter((user) => user.name !== name);
    setUsers(filtersUsers);
  };

  return (
    <StyledWrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <StytledList>
        {users.map((userData) => (
          <UsersListItem
            key={userData.name}
            deleteUser={deleteUser}
            userData={userData}
          />
        ))}
      </StytledList>
    </StyledWrapper>
  );
};

export default UsersList;
