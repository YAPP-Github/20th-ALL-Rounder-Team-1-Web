import styled from 'styled-components';

import { usePopUpDispatch } from '@/contexts';

export const CalendarPopUp = () => {
  const dispatch = usePopUpDispatch();

  const setIsCalendarOpen = () => dispatch({ type: 'TOGGLE_CALENDAR_POP_UP' });

  return (
    <Wrapper>
      <button onClick={setIsCalendarOpen}>Close PopUp</button>
      <h1>Calendar</h1>
      <p>화려한 달력이 있을 예정....</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  border: 1px solid black;
  width: 1000px;
  height: 600px;
  top: 100px;
  left: 200px;
`;
