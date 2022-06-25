import { useContext } from 'react';
import styled from 'styled-components';

import { ToastContext } from '@/contexts';

export const Toast = () => {
  const { isVisible, text, isSuccess } = useContext(ToastContext);

  return (
    <Wrapper visible={isVisible} isSuccess={isSuccess}>
      <p className="content">{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ visible: boolean; isSuccess: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 48px;
  left: 0px;
  bottom: 0px;
  background-color: ${({ isSuccess, theme: { colors } }) =>
    isSuccess ? colors.WeekandBlue : colors.WeekandRed};

  p.content {
    color: #fff;
    ${({ theme: { fonts } }) => fonts.Body1};
  }
`;
