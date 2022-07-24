import { useContext } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { ToastContext } from '@/contexts';

export const Toast = () => {
  const { getToast } = useContext(ToastContext);

  const { isToasted, toastType, toastMessage } = getToast();

  return (
    <Wrapper className={cn(toastType, isToasted && 'open')}>
      <p className="content">{toastMessage}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  position: fixed;
  text-align: center;
  width: 100%;
  left: 0px;
  bottom: 0px;
  background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
  padding: 11px 0;

  &.open {
    display: block;
  }

  &.error {
    background-color: ${({ theme: { colors } }) => colors.WeekandRed};
  }

  p.content {
    color: #fff;
    ${({ theme: { fonts } }) => fonts.Body1};
  }
`;
