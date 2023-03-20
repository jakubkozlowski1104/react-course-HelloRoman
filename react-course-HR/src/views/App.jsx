import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/Theme';
import { StyledWrapper } from './App.styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>
      <UsersList />
    </StyledWrapper>
  </ThemeProvider>
);

export default App;
