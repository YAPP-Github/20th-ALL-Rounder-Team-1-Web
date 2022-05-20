import styled from 'styled-components';

interface IPropsWithChildren {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, children }: IPropsWithChildren) => {
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
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 1px solid black;
  padding: 2em 0em;
`;

const Main = styled.main`
  padding-top: 20vh;
`;

const Footer = styled.header`
  width: 100vw;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  padding: 2em 0em;
`;
