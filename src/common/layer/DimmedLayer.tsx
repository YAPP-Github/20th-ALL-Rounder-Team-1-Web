import { useContext } from 'react';
import styled from 'styled-components';

import { DimmedLayerContext } from '@/contexts';

export const DimmedLayer = () => {
  const { isVisible, setIsVisible, type } = useContext(DimmedLayerContext);

  const onClick = () => {
    if (type === 'transparent') {
      setIsVisible(!isVisible);
    }
  };

  return <Wrapper onClick={onClick} visible={isVisible} type={type} />;
};

const Wrapper = styled.div<{ visible: boolean; type: string }>`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${({ type }) => (type === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'tranparent')};
`;
