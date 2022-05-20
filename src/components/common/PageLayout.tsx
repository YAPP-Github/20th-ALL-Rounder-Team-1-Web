interface IPropsWithChildren {
  children: React.ReactNode;
}

const PageLayout = ({ children }: IPropsWithChildren) => {
  return (
    <>
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};

export default PageLayout;
