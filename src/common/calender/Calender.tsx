import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ManipulateType } from 'dayjs';
import styled from 'styled-components';

import { CalenderBody } from './CalenderBody';
import { CalenderHeader } from './CalenderHeader';

import { Day } from '@/hooks';

interface CalendarProps {
  className?: string;
  today: Day;
  date: Day;
  setDate: Dispatch<SetStateAction<Day>>;
}

export const Calender = ({ className, today, date, setDate }: CalendarProps) => {
  const [mode, setMode] = useState<ManipulateType>('week');

  useEffect(() => {
    if (className === 'schedule' || className === 'repeat_schedule') {
      setMode('month');
    }
  }, []);

  return (
    <Wrapper className={className}>
      <CalenderHeader
        className={className}
        today={today}
        date={date}
        setDate={setDate}
        mode={mode}
        setMode={setMode}
      />
      <CalenderBody className={className} today={today} date={date} setDate={setDate} mode={mode} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 392px;
  margin: 0 auto;
  margin-top: 50px;

  &.schedule {
    margin-top: 0;
    width: 375px;
  }

  &.repeat_schedule {
    margin-top: 19px;
    width: 375px;
  }
`;
