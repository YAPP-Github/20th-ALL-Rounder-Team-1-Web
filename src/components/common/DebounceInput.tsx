import { ChangeEvent, useEffect, useState } from 'react';

export const DebounceInput = () => {
  const [currentWord, setCurrentWord] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCurrentWord(value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      // 검색 관련 api를 console.log를 제거한 후 추가하면 됩니다!
      return console.log(currentWord);
    }, 400);
    return () => clearTimeout(debounce);
  }, [currentWord]);

  return <input type="text" onChange={onChange} />;
};
