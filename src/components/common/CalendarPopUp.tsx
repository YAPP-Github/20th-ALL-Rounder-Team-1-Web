import { usePopUpDispatch } from '@/contexts';

export const CalendarPopUp = () => {
  const dispatch = usePopUpDispatch();

  const setIsCalendarOpen = () => dispatch({ type: 'TOGGLE_CALENDAR_POP_UP' });

  return (
    <>
      <button onClick={setIsCalendarOpen}>Close PopUp</button>
      <h1>Calendar</h1>
      <p>화려한 달력이 있을 예정....</p>
    </>
  );
};
