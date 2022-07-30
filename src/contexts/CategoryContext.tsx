import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useRef,
  useState,
} from 'react';

interface ICategory {
  id: number;
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
  getCategory: () => ICategory;
  setCategory: (props: Partial<ICategory>) => void;
  schedules: ISchedules[];
  setSchedules: Dispatch<SetStateAction<ISchedules[]>>;
};

export const CategoryContext = createContext<CategoryProps>({} as CategoryProps);

export const CategoryContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const category = useRef<ICategory>({
    id: 0,
    name: '',
    color: '',
    openType: '',
  });

  const getCategory = () => {
    return category.current;
  };

  const setCategory = (props: Partial<ICategory>) => {
    category.current = {
      ...category.current,
      ...props,
    };
  };

  const [schedules, setSchedules] = useState<ISchedules[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        getCategory,
        setCategory,
        schedules,
        setSchedules,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
