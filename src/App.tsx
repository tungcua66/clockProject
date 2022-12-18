import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Clock from './components/Clock';
import Form from './components/Form';


const AppContainer = styled.div(() => ({
  margin: '1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2px',
}));

const ClocksContainer = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignContent: 'center',
  gap: '20px'
}))

const App = () => {
  const [clockList, setClockList] = useState([
    {
      id: nanoid(), value: 'GMT+1', desc: 'Europe/Paris',
    },
  ]);
  useEffect(() => {
    console.log('clockList', clockList)
  }, [clockList]);

  return (
    <>
      <AppContainer className='AppContainer'>
        <Form
          clockList={clockList}
          setClockList={setClockList}
        />
        <ClocksContainer>
        {clockList.map((clock) => (
          <Clock
            key={clock.id}
            timeZone={`${clock.value}`}
            desc={`${clock.desc}`}
          />
        ))}
        </ClocksContainer>
      </AppContainer>

    </>
  );
};

export default App;
