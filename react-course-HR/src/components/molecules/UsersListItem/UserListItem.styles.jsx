import styled from 'styled-components';

export const StyledWrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 0px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const StyledMainData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 10px;

  .name {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 10px;
  }

  .attendance {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 10px;
  }
`;
