import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

export const ModalLayout = ({ children }: PropsWithChildren<unknown>) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 20px 40px;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
  border-right: 3px solid #000;
  border-radius: 10px 10px 0 0;
`;
