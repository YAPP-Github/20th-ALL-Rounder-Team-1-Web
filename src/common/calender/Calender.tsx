import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ManipulateType } from 'dayjs';
import styled from 'styled-components';

import { CalenderBody } from './CalenderBody';
import { CalenderHeader } from './CalenderHeader';

import { useDate } from '@/hooks';

interface CalendarProps {
  setToday?: Dispatch<SetStateAction<string>>;
  setClickedDay?: Dispatch<SetStateAction<string>>;
}

export const Calender = ({ setToday, setClickedDay }: CalendarProps) => {
  const [mode, setMode] = useState<ManipulateType>('week');
  const { today, date, setDate } = useDate();

  console.log(today, date);

  useEffect(() => {
    if (setToday) {
      setToday(today.unix() + '0000');
    }
  }, [today]);

  useEffect(() => {
    if (setClickedDay) {
      setClickedDay(date.unix() + '0000');
    }
  }, [date]);

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
