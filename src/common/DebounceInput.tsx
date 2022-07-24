import { ChangeEvent, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSearchSchedules } from '@/api';
import { CategoryContext } from '@/contexts';
import { SORT } from '@/utils';

interface DebounceInputProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setIsInputFocused?: Dispatch<SetStateAction<boolean>>;
}

export const DebounceInput = ({
  inputValue,
  setInputValue,
  setIsInputFocused,
  ...restProps
}: DebounceInputProps) => {
  const { setSchedules } = useContext(CategoryContext);
  const { search_schedules } = useSearchSchedules();
  const { pathname } = useLocation();
  const categoryId = pathname.split('/')[2];

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (setIsInputFocused) {
      setIsInputFocused(false);
    }
  };

  const onClickInput = () => {
    if (setIsInputFocused && inputValue.length === 0) {
      setIsInputFocused(true);
    }
  };

  const showCategories = async () => {
    const {
      data: {
        searchSchedules: { schedules },
      },
    } = await search_schedules({
      variables: {
        sort: SORT.DATE_CREATED_ASC,
        page: 0,
        size: 9,
        searchQuery: inputValue,
        categoryId,
      },
    });
    setSchedules(schedules);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      showCategories();
      return;
    }, 400);
    return () => clearTimeout(debounce);
  }, [inputValue]);

  return (
    <input
      type="text"
      onChange={onChange}
      onClick={onClickInput}
      placeholder="일정을 검색해보세요"
      {...restProps}
    />
  );
};
