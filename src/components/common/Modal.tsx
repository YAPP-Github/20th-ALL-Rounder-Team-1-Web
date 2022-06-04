import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { CalendarPopUp, DimmedLayer, FindPasswordPopUp } from '@/components';
import { PopUpContext } from '@/contexts';

export const Modal = () => {
  const { isCalendarOpen, isFindPasswordOpen } = useContext(PopUpContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isCalendarOpen || isFindPasswordOpen) {
      return setVisible(true);
    }
    return setVisible(false);
  }, [isCalendarOpen, isFindPasswordOpen]);

  return (
    <div>
      <DimmedLayer visible={visible} />
      <PopUpWrapper visible={visible}>
        {isCalendarOpen && <CalendarPopUp />}
        {isFindPasswordOpen && <FindPasswordPopUp />}
      </PopUpWrapper>
    </div>
  );
};

const PopUpWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  border: 1px solid #000;
  width: 500px;
  height: 500px;
  top: 100px;
  left: 100px;
  z-index: 2;
  background-color: #ffffff;
`;
