import styled from '@emotion/styled';
import Clock from './components/Clock';

const AppContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1em',
  width: '50em',
}));

const App = () => (
  <AppContainer>
    <Clock />
  </AppContainer>
);

export default App;
