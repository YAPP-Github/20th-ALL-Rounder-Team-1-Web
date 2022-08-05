import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import cn from 'classnames';
import styled from 'styled-components';

import { Button } from '.';

import { PopUpContext } from '@/contexts';

export const FloatingButton = () => {
  const location = useLocation();
  const { setPopup } = useContext(PopUpContext);

  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsExist(true);
      return;
    }
    setIsExist(false);
  }, [location.pathname]);

  const clickFloatingButton = () => {
    setPopup('schedule');
  };

  return (
    <Wrapper className={cn(!isExist && 'blind_button')} onClick={clickFloatingButton}></Wrapper>
  );
};

const Wrapper = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
  position: fixed;
  right: 70px;
  bottom: 70px;
  border-radius: 100%;

  &::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 30, 30)}
    margin: 21px;
    background-size: 455px 385px;
    background-position: -321px -214px;
  }

  &.blind_button {
    display: none;
  }
`;
