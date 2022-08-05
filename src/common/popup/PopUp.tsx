import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { CreateCategoryPopup } from './CreateCategoryPopup';
import { Category, MainSchedule } from '.';

import { DimmedLayerContext, PopupContext } from '@/contexts';

export const Popup = () => {
  const { setIsDimmed } = useContext(DimmedLayerContext);

  const { isPopped, type } = useContext(PopupContext);

  useEffect(() => {
    if (isPopped) {
      setIsDimmed(true);
      return;
    }

    setIsDimmed(false);
  }, [isPopped]);

  const getPopupByType = () => {
    if (type === 'category') {
      return <Category />;
    }

    if (type === 'schedule') {
      return <MainSchedule />;
    }

    if (type === 'create-category') {
      return <CreateCategoryPopup />;
    }

    if (type === 'edit-category') {
      return <Category />;
    }
  };

  return <PopupWrapper visible={isPopped}>{getPopupByType()}</PopupWrapper>;
};

const PopupWrapper = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: #fff;
  position: absolute;
  z-index: 20;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 48px 40px 40px;
  border-radius: 10px;
`;
