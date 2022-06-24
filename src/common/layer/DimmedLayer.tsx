import { useContext } from 'react';
import styled from 'styled-components';

import { DimmedLayerContext } from '@/contexts';

export const DimmedLayer = () => {
  const { isVisible } = useContext(DimmedLayerContext);

  return <Wrapper visible={isVisible} />;
};

const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
