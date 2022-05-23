import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CalendarPopUp, FindPasswordPopUp } from '@/components';
import { usePopUpState } from '@/contexts';

export const Modal = () => {
  const [visible, setVisible] = useState(false);
  const { isCalendarOpen, isFindPasswordOpen } = usePopUpState();

  useEffect(() => {
    if (isCalendarOpen || isFindPasswordOpen) {
      return setVisible(true);
    }
    return setVisible(false);
  }, [isCalendarOpen, isFindPasswordOpen]);

  return (
    <div>
      <Overlay visible={visible} />
      <PopUpWrapper visible={visible}>
        {isCalendarOpen && <CalendarPopUp />}
        {isFindPasswordOpen && <FindPasswordPopUp />}
      </PopUpWrapper>
    </div>
  );
};

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const PopUpWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  border: 1px solid black;
  width: 80vw;
  height: 80vh;
  top: 10vh;
  left: 10vw;
  z-index: 1000;
  background-color: white;
`;
