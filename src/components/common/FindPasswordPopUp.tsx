import { usePopUpDispatch } from '@/contexts';

export const FindPasswordPopUp = () => {
  const dispatch = usePopUpDispatch();

  const setIsCalendarOpen = () => dispatch({ type: 'TOGGLE_FIND_PASSWORD_POP_UP' });

  return (
    <>
      <button onClick={setIsCalendarOpen}>Close PopUp</button>
      <h1>Find Password</h1>
      <p>임시 비밀번호 발급...</p>
    </>
  );
};
