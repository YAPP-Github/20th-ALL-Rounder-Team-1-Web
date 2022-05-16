interface IPropsWithChildren {
  components?: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export const AppProvider = ({ components = [], children }: IPropsWithChildren) => {
  return (
    <>
      {components.reduceRight((accumulatedComponents, CurrentComponent) => {
        return <CurrentComponent>{accumulatedComponents}</CurrentComponent>;
      }, children)}
    </>
  );
};
