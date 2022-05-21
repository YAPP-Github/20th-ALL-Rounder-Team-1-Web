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
        <p>© Copyright Weekand 2022</p>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1}
  text-align: center;
`;

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #000;
  padding: 36px 0px;
`;

const Main = styled.main`
  padding-top: 144px;
`;

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #000;
  padding: 36px 0px;
`;
