import { useState } from 'react';
import { ManipulateType } from 'dayjs';
import styled from 'styled-components';

import { CalenderBody } from './CalenderBody';
import { CalenderHeader } from './CalenderHeader';

import { useDate } from '@/hooks';

export const Calender = () => {
  const [mode, setMode] = useState<ManipulateType>('week');
  const { today, date, setDate } = useDate();

  return (
    <Wrapper>
      <CalenderHeader today={today} date={date} setDate={setDate} mode={mode} setMode={setMode} />
      <CalenderBody today={today} date={date} setDate={setDate} mode={mode} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 392px;
  margin: 0 auto;
  margin-top: 50px;
`;
