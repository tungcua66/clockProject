import styled from '@emotion/styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Clock from './components/Clock';
import Form from './components/Form';

const AppContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '1em',
  flexWrap: 'wrap',
}));

const App = () => {
  const [clockList, setClockList] = useState([
    {
      id: nanoid(), value: 'GMT+1', desc: 'Europe/Paris',
    },
  ]);
  return (
    <AppContainer>
      <Form />
      {clockList.map((clock) => (
        <Clock
          key={clock.id}
          timeZone={`${clock.value}`}
          desc={`${clock.desc}`}
          clockList={clockList}
          setClockList={setClockList}
        />
      ))}
    </AppContainer>
  );
};

export default App;
