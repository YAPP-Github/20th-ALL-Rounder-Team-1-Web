import { usePopUpDispatch } from '@/contexts';

export const TestPage = () => {
  const dispatch = usePopUpDispatch();

  const setIsCalendarOpen = () => dispatch({ type: 'TOGGLE_CALENDAR_POP_UP' });
  const setIsFindPasswordOpen = () => dispatch({ type: 'TOGGLE_FIND_PASSWORD_POP_UP' });

  return (
    <div>
      <button onClick={setIsCalendarOpen}>Calendar PopUp</button>
      <button onClick={setIsFindPasswordOpen}>Find Password PopUp</button>
    </div>
  );
};
