import { useContext } from 'react';

import { PopUpContext } from '@/contexts';

export const CalendarPopUp = () => {
  const { isCalendarOpen, setIsCalendarOpen } = useContext(PopUpContext);

  return (
    <>
      <button onClick={() => setIsCalendarOpen(!isCalendarOpen)}>Close PopUp</button>
      <h1>Calendar</h1>
      <p>화려한 달력이 있을 예정....</p>
    </>
  );
};
