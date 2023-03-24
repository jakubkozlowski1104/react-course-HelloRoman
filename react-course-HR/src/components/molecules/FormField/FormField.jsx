import React from 'react';
import PropsTypes from 'prop-types';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;

  ${Label} {
    margin: 5px;
    font-size: 15px;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}> {label} </Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default FormField;

FormField.PropsTypes = {
  label: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  id: PropsTypes.string.isRequired,
  type: PropsTypes.string,
};
