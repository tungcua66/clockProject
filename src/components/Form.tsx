import styled from '@emotion/styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import gmtList from '../data/gmtList';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'center',
  gap: '2px',
}));

const GMTSelectGroup = styled.div(() => ({
  width: '100px',
}));

interface formProps {
  clockList: Array <{
    id: string,
    value: string,
    desc: string,
  }>,
  setClockList: () => void,
}

const Form = ({ clockList, setClockList }: formProps) => {
  const [selectedValue, setSelectedValue] = useState();

  const createNewClockHandler = () => {
    if(selectedValue !== 'Select GMT:' 
    && clockList.findIndex((clock) => clock.value !== selectedValue) !== -1) {
      console.log('hey im in');
      const selectedGMT = gmtList.find((gmt) => gmt.value === selectedValue);
      setClockList([...clockList, selectedGMT]);
    }
  };

  return (
    <Container>
      <GMTSelectGroup>
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        >
          {gmtList.map((gmt) => (
            <option key={gmt.id} value={gmt.value}>
              {' '}
              {gmt.value}
            </option>
          ))}
        </select>
      </GMTSelectGroup>
      <button type="button" onMouseDown={() => { createNewClockHandler(); }}>
        Create clock
      </button>
    </Container>
  );
};

export default Form;
