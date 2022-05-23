import { useContext } from 'react';

import { PopUpContext } from '@/contexts';

export const TestPage = () => {
  const { isCalendarOpen, setIsCalendarOpen, isFindPasswordOpen, setIsFindPasswordOpen } =
    useContext(PopUpContext);
  return (
    <div>
      <button onClick={() => setIsCalendarOpen(!isCalendarOpen)}>Calendar PopUp</button>
      <button onClick={() => setIsFindPasswordOpen(!isFindPasswordOpen)}>
        Find Password PopUp
      </button>
    </div>
  );
};
