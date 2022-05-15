interface IProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export const AppProvider = ({ components = [], children }: IProps) => {
  return (
    <>
      {components.reduceRight((accumulatedComponents, CurrentComponent) => {
        return <CurrentComponent>{accumulatedComponents}</CurrentComponent>;
      }, children)}
    </>
  );
};
