import { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import moment from 'moment';
import { getCurrentTimeInTimeZone } from '../helpers/calculateTimeZone';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2px',
}));

const Title = styled.div(() => ({
  font: '2rem',
  color: 'red',
}));

const ClockContainer = styled.div(() => ({
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

interface ClockProps {
  timeZone: string,
  desc: string,
}

const Clock = ({
  timeZone, desc,
}: ClockProps) => {
  const [time, setTime] = useState(moment());
  const [lightModeIsOn, setLightMode] = useState(false);
  const [mode, setMode] = useState(0); // 0 = noEditable, 1 = hour, 2 = minutes
  const [timeAcc, setTimeAcc] = useState({ hourAcc: 0, minuteAcc: 0 });

  const lightModeOnClickHandler = () => {
    setLightMode((prev) => !prev);
  };
  const resetModeOnClickHandler = () => {
    setTimeAcc({ hourAcc: 0, minuteAcc: 0 });
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
      const newTime = getCurrentTimeInTimeZone(timeZone);
      newTime.set({
        hour: newTime.hours() + timeAcc.hourAcc,
        minute: newTime.minutes() + timeAcc.minuteAcc,
      });
      setTime(newTime);
    }, 100);
    return () => { clearInterval(timerId); };
  }, [timeAcc, timeZone]);

  return (
    <Container>
      <Title>
        {' '}
        {desc}
      </Title>
      <ClockContainer className="ClockContainer">
        <BlockContainer className="LeftBlock">
          <ButtonContainer
            className="ButtonLightMode"
            onMouseDown={() => { lightModeOnClickHandler(); }}
          />
          <ButtonContainer
            className="ButtonResetMode"
            onMouseDown={() => { resetModeOnClickHandler(); }}
          />
        </BlockContainer>
        <TimeContainer lightModeIsOn={lightModeIsOn}>
          <TimeUnit
            className="Hour"
            lightModeIsOn={lightModeIsOn}
            isSelected={mode === 1}
          >
            {' '}
            {time.hours() < 10 ? `0${time.hours()}` : time.hours()}

          </TimeUnit>
          :
          <TimeUnit
            className="Minutes"
            lightModeIsOn={lightModeIsOn}
            isSelected={mode === 2}
          >
            {' '}
            {time.minutes() < 10 ? `0${time.minutes()}` : time.minutes()}
          </TimeUnit>
          :
          <TimeUnit className="Seconds" lightModeIsOn={lightModeIsOn}>
            {' '}
            {time.seconds() < 10 ? `0${time.seconds()}` : time.seconds()}
          </TimeUnit>
        </TimeContainer>
        <BlockContainer className="RightBlock">
          <ButtonContainer
            className="ButtonMode"
            onMouseDown={() => { buttonModeOnClickHandler(); }}
          />
          <ButtonContainer
            className="ButtonIncrease"
            justifySelf="start"
            onMouseDown={() => { buttonIncreaseOnClickHandler(); }}
          />
        </BlockContainer>

      </ClockContainer>
    </Container>

  );
};

export default Clock;
