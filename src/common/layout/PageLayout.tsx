import { PropsWithChildren } from 'react';
import styled from 'styled-components';

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
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1}
  text-align: center;
`;

const Header = styled.header`
  height: 36px;
  padding: 36px 0px;
`;

const Footer = styled.footer`
  border-top: 1px solid #000;
`;
