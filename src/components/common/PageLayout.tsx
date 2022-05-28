import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  title: string;
}

export const PageLayout = ({ children, title }: PropsWithChildren<PageLayoutProps>) => {
  return (
    <Wrapper>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <small>© Copyright Weekand 2022</small>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1}
  text-align: center;
`;

const Header = styled.header`
  border-bottom: 1px solid #000;
  padding: 36px 0px;
`;

const Main = styled.main`
  height: 1200px;
`;

const Footer = styled.footer`
  border-top: 1px solid #000;
`;
