import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type CategoryProps = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  categoryName: string;
  setCategoryName: Dispatch<SetStateAction<string>>;
  visibility: string;
  setVisibility: Dispatch<SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryProps>({} as CategoryProps);

export const CategoryContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [color, setColor] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [visibility, setVisibility] = useState('');

  return (
    <CategoryContext.Provider
      value={{
        color,
        setColor,
        categoryName,
        setCategoryName,
        visibility,
        setVisibility,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
