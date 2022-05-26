import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { CalendarPopUp, FindPasswordPopUp, SearchFilter } from '@/components';
import { PopUpContext } from '@/contexts';

export const Modal = () => {
  const { isCalendarOpen, isFindPasswordOpen, isFilterJobOpen } = useContext(PopUpContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isCalendarOpen || isFindPasswordOpen || isFilterJobOpen) {
      return setVisible(true);
    }
    return setVisible(false);
  }, [isCalendarOpen, isFindPasswordOpen, isFilterJobOpen]);

  return (
    <div>
      <Overlay visible={visible} />
      <PopUpWrapper visible={visible}>
        {isCalendarOpen && <CalendarPopUp />}
        {isFindPasswordOpen && <FindPasswordPopUp />}
        {isFilterJobOpen && <SearchFilter jobs={['IT엔지니어', '마케팅', '영업']} />}
      </PopUpWrapper>
    </div>
  );
};

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

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
