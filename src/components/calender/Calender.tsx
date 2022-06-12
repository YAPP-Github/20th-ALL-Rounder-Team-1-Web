import styled from 'styled-components';

import { CalenderHeader } from './CalenderHeader';
import { CalenderBody } from './CalenderBody';

import { useDate } from '@/hooks';

export const Calender = () => {
  const { today, date, setDate } = useDate();

  return (
    <Wrapper>
      <CalenderHeader date={date} setDate={setDate} />
      <CalenderBody today={today} date={date} setDate={setDate} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 392px;
  margin: 0 auto;
  margin-top: 50px;
`;
