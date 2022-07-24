import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

interface ICategory {
  id: string;
  name: string;
  color: string;
  openType: string;
}
interface ISchedules {
  id: string;
  name: string;
  category: ICategory;
  dateTimeStart: string;
  dateTimeEnd: string;
  repeatType: string;
  repeatSelectedValue?: string;
  memo?: string;
  dateSkip?: string[];
}

type CategoryProps = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  categoryName: string;
  setCategoryName: Dispatch<SetStateAction<string>>;
  visibility: string;
  setVisibility: Dispatch<SetStateAction<string>>;
  schedules: ISchedules[];
  setSchedules: Dispatch<SetStateAction<ISchedules[]>>;
};

export const CategoryContext = createContext<CategoryProps>({} as CategoryProps);

export const CategoryContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [color, setColor] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [visibility, setVisibility] = useState('');
  const [schedules, setSchedules] = useState<ISchedules[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        color,
        setColor,
        categoryName,
        setCategoryName,
        visibility,
        setVisibility,
        schedules,
        setSchedules,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
