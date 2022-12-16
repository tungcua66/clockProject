import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Clock from './components/Clock';

const AppContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1em',
  width: '50em',
}));

const App = () => {
  const test = 1;

  return (
    <AppContainer>
      <Clock />
    </AppContainer>
  );
};

export default App;
