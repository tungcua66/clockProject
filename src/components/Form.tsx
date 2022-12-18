import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { useState } from 'react';
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

const Form = () => {
  const test = 0;
  const [selectedValue, setSelectedValue] = useState();
  return (
    <Container>
      <GMTSelectGroup>
        <select
          value={selectedValue}
          onChange={(e) => { setSelectedValue(e.target.value); }}
        >
          {gmtList.map((gmt) => (
            <option key={gmt.id} value={gmt.value}>
              {' '}
              {gmt.value}
            </option>
          ))}
        </select>
      </GMTSelectGroup>
      <button type="button" onMouseDown={() => { console.log('selectedValue', selectedValue); }}>
        Create clock
      </button>
    </Container>
  );
};

export default Form;
