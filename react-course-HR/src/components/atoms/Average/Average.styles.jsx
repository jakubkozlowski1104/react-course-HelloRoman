import styled from 'styled-components';

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ value, theme }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    else return theme.colors.error;
  }};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  width: 31px;
  height: 31px;
`;
