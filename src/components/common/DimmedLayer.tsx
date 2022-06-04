import styled from 'styled-components';

interface DimmedLayerProps {
  visible: boolean;
}

export const DimmedLayer = ({ visible }: DimmedLayerProps) => {
  return <Wrapper visible={visible} />;
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
