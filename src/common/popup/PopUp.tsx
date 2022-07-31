import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { DimmedLayerContext, PopUpContext } from '@/contexts';

import { CategoryPopup } from '..';

export const PopUp = () => {
  const { setIsDimmed } = useContext(DimmedLayerContext);

  // 팝업 종류 (string)를 받아서 이에 맞는 컴포넌트를 렌더하는 식으로 가야 할듯
  const { isPopped } = useContext(PopUpContext);

  useEffect(() => {
    if (isPopped) {
      setIsDimmed(true);
      return;
    }

    setIsDimmed(false);
  }, [isPopped]);

  return <PopUpWrapper visible={isPopped}>{CategoryPopup()}</PopUpWrapper>;
};

const PopUpWrapper = styled.div<{ visible: boolean }>`
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
