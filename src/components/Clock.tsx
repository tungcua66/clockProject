import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '0.5fr 2fr 0.5fr',
  width: '300px',
  height: '300px',
  backgroundColor: '#d5fa78',
}));

const BlockContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  alignContent: 'center',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#798556',
}));

const TimeContainer = styled.div(({ lightModeIsOn = false }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: lightModeIsOn ? '#262438' : '#698cd6',
  color: lightModeIsOn ? 'green' : 'black',
  fontFamily: 'Orbitron',
  fontSize: '2em',
}));
const ButtonContainer = styled.button(({ justifySelf }) => ({
  width: '50px',
  height: '30px',
  backgroundColor: '#ed6ba1',
  justifySelf,
}));

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [lightModeIsOn, setLightMode] = useState(false);

  const lightModeOnClickHandler = () => {
    // e.preventDefault();
    console.log('hey im in');
    setLightMode((prev) => !prev);
  };

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => { clearInterval(timerId); };
  }, []);

  // return <div>{date.toLocaleTimeString()}</div>;
  return (
    <MainContainer className="MainContainer">
      <BlockContainer className="LeftBlock">
        <ButtonContainer
          className="ButtonLightMode"
          onMouseDown={() => { lightModeOnClickHandler(); }}
        />
      </BlockContainer>
      <TimeContainer lightModeIsOn={lightModeIsOn}>
        {' '}
        {date.toLocaleTimeString()}
      </TimeContainer>
      <BlockContainer className="RightBlock">
        <ButtonContainer className="ButtonMode" date={date} />
        <ButtonContainer className="ButtonIncrease" justifySelf="start" />
      </BlockContainer>

    </MainContainer>
  );
};

export default Clock;
