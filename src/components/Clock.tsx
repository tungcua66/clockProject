import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '0.5fr 2fr 0.5fr',
  gap: '1px',
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

const TimeUnit = styled.div(({ lightModeIsOn = false, isSelected = false }) => ({
  width: '1em',
  height: '1em',
  color: lightModeIsOn ? 'green' : 'black',
  fontFamily: 'Orbitron',
  fontSize: '2em',
  backgroundColor: isSelected ? '#e7f0a5' : 'none',
  boxShadow: lightModeIsOn ? '0 0 10px #69f564, 0 0 40px #69f564, 0 0 80px #69f564' : 'none',
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
  const [mode, setMode] = useState(0); // 0 = noEditable, 1 = hour, 2 = minutes
  const [timeAcc, setTimeAcc] = useState({ hourAcc: 0, minuteAcc: 0 });

  const lightModeOnClickHandler = () => {
    setLightMode((prev) => !prev);
  };

  const buttonModeOnClickHandler = () => {
    setMode((prev) => {
      if (prev === 2) {
        return 0;
      }
      return prev + 1;
    });
  };

  const buttonIncreaseOnClickHandler = () => {
    if (mode === 1) {
      setTimeAcc({ ...timeAcc, hourAcc: timeAcc.hourAcc + 1 });
    }
    if (mode === 2) {
      setTimeAcc({ ...timeAcc, minuteAcc: timeAcc.minuteAcc + 1 });
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + timeAcc.hourAcc);
      newDate.setMinutes(newDate.getMinutes() + timeAcc.minuteAcc);
      setDate(newDate);
    }, 100);
    return () => { clearInterval(timerId); };
  }, [timeAcc]);

  return (
    <MainContainer className="MainContainer">
      <BlockContainer className="LeftBlock">
        <ButtonContainer
          className="ButtonLightMode"
          onMouseDown={() => { lightModeOnClickHandler(); }}
        />
      </BlockContainer>
      <TimeContainer lightModeIsOn={lightModeIsOn}>
        <TimeUnit
          className="Hour"
          lightModeIsOn={lightModeIsOn}
          isSelected={mode === 1}
        >
          {' '}
          {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}

        </TimeUnit>
        :
        <TimeUnit
          className="Minutes"
          lightModeIsOn={lightModeIsOn}
          isSelected={mode === 2}

        >
          {' '}
          {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
        </TimeUnit>
        :
        <TimeUnit className="Seconds" lightModeIsOn={lightModeIsOn}>
          {' '}
          {date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}
        </TimeUnit>
      </TimeContainer>
      <BlockContainer className="RightBlock">
        <ButtonContainer
          className="ButtonMode"
          date={date}
          onMouseDown={() => { buttonModeOnClickHandler(); }}
        />
        <ButtonContainer
          className="ButtonIncrease"
          justifySelf="start"
          onMouseDown={() => { buttonIncreaseOnClickHandler(); }}
        />
      </BlockContainer>

    </MainContainer>
  );
};

export default Clock;
