import styled from '@emotion/styled';
import Clock from './components/Clock';
import Form from './components/Form';

const AppContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '1em',
  flexWrap: 'wrap',
}));

const App = () => (
  <AppContainer>
    <Form />
    {/* <h1> hello</h1> */}
    <Clock timeZone="GMT+1" />
  </AppContainer>
);

export default App;
