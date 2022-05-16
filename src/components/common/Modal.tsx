import { CalendarPopUp } from './CalendarPopUp';
import { FindPasswordPopUp } from './FindPasswordPopUp';
import { usePopUpState } from '@/contexts';

export const Modal = () => {
  const { isCalendarOpen, isFindPasswordOpen } = usePopUpState();

  return (
    <div>
      {isCalendarOpen && <CalendarPopUp />}
      {isFindPasswordOpen && <FindPasswordPopUp />}
    </div>
  );
};
