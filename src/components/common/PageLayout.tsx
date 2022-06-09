import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Header } from '@/components';

interface PageLayoutProps {
  isHeader?: boolean;
  isFooter?: boolean;
}

export const PageLayout = ({
  children,
  isHeader = true,
  isFooter = true,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <Wrapper>
      {isHeader && <Header />}
      {children}
      {isFooter && (
        <Footer>
          <small>© Copyright Weekand 2022</small>
        </Footer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1}
  text-align: center;
`;

const Footer = styled.footer`
  border-top: 1px solid #000;
`;
