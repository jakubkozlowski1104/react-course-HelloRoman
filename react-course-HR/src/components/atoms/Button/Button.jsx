import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 5px;
  padding: 6px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};

  button:hover {
    background-color: red;
  }
`;
