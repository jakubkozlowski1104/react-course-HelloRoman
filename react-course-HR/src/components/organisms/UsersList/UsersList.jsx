import { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StytledList, StyledWrapper, StyledTitle } from './UsersList.styles';
import FormField from '../../molecules/FormField/FormField';
import { Button } from '../../atoms/Button/Button';

const initalFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initalFormState);

  const deleteUser = (name) => {
    const filtersUsers = users.filter((user) => user.name !== name);
    setUsers(filtersUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initalFormState);
  };

  return (
    <>
      <StyledWrapper as='form' onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField
          label='Name'
          id='name'
          name='name'
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label='Attendance'
          id='attendance'
          name='attendance'
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label='Average'
          id='average'
          name='average'
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type='submit'>Add</Button>
      </StyledWrapper>

      <StyledWrapper>
        <h1>UsersList</h1>
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
    </>
  );
};

export default UsersList;
