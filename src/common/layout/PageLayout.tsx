import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Header } from '@/common';
import { useBackgroundColor } from '@/hooks';

interface PageLayoutProps {
  isHeader?: boolean;
  isFooter?: boolean;
}

export const PageLayout = ({
  children,
  isHeader = true,
  isFooter = true,
}: PropsWithChildren<PageLayoutProps>) => {
  useBackgroundColor();

  return (
    <>
      {isHeader && <Header />}
      {children}
      {isFooter && (
        <Footer>
          <small>© Copyright Weekand 2022</small>
        </Footer>
      )}
    </>
  );
};

const Footer = styled.footer`
  border-top: 1px solid #000;
`;
