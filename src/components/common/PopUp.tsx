import { useContext } from 'react';
import styled from 'styled-components';

import { CalendarPopUp, FindPasswordPopUp } from '@/components';
import { PopUpContext } from '@/contexts';

export const PopUp = () => {
  const { isCalendarOpen, isFindPasswordOpen, isVisible, innerContent } = useContext(PopUpContext);

  return (
    <div>
      <PopUpWrapper visible={isVisible}>{innerContent}</PopUpWrapper>
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
