import { ChangeEvent, useEffect, useState } from 'react';

export const DebounceInput = () => {
  const [currentWord, setCurrentWord] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCurrentWord(value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      return console.log(currentWord);
    }, 400);
    return () => clearTimeout(debounce);
  }, [currentWord]);

  return <input type="text" onChange={onChange} />;
};
