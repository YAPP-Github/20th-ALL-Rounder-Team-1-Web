import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { getBackgroundColor } from '@/utils';

interface PageLayoutProps {
  title: string;
  isHeader?: boolean;
  isFooter?: boolean;
}

export const PageLayout = ({
  children,
  title,
  isHeader = true,
  isFooter = true,
}: PropsWithChildren<PageLayoutProps>) => {
  const bgColor = getBackgroundColor();

  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        {isHeader && (
          <Header>
            <h1>{title}</h1>
          </Header>
        )}
        {children}
        {isFooter && (
          <Footer>
            <small>© Copyright Weekand 2022</small>
          </Footer>
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
`;

const Content = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1}
  text-align: center;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
`;

const Header = styled.header`
  border-bottom: 1px solid #000;
  padding: 36px 0px;
`;

const Footer = styled.footer`
  border-top: 1px solid #000;
`;
