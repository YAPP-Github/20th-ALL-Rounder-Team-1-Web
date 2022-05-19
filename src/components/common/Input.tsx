import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  checkAuthNumber,
  checkCategoryTitle,
  checkEmail,
  checkNickName,
  checkPassword,
  checkPlanTitle,
  checkRetypedPassword,
} from '@/utils';

type InputType =
  | 'authNumber'
  | 'categoryTitle'
  | 'date'
  | 'email'
  | 'nickName'
  | 'password'
  | 'planTitle'
  | 'retypedPassword'
  | 'time';

interface IProps {
  authInput?: number;
  inputMaxLength?: number;
  inputType: string;
  isValidNickName?: boolean | undefined;
  setCurrentPassword?: Dispatch<SetStateAction<string>>;
  type: InputType;
  typedPassword?: string;
}

export const Input = ({
  authInput,
  inputMaxLength,
  inputType,
  isValidNickName,
  setCurrentPassword,
  type,
  typedPassword,
}: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const checkInput = () => {
    if (type === 'authNumber' && authInput) {
      return checkAuthNumber(authInput, inputValue, setMessage);
    }
    if (type === 'categoryTitle') {
      return checkCategoryTitle(inputValue, setMessage);
    }
    if (type === 'email') {
      return checkEmail(inputValue, setMessage);
    }
    if (type === 'nickName') {
      return checkNickName(inputValue, isValidNickName, setMessage);
    }
    if (type === 'password' && setCurrentPassword) {
      return checkPassword(inputValue, setCurrentPassword, setMessage);
    }
    if (type === 'planTitle') {
      return checkPlanTitle(inputValue, setMessage);
    }
    if (type === 'retypedPassword' && typedPassword) {
      return checkRetypedPassword(inputValue, setMessage, typedPassword);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  useEffect(() => {
    checkInput();
  }, [inputValue]);

  return (
    <>
      <input
        onChange={onChange}
        value={inputValue}
        type={inputType}
        name={type}
        id={type}
        maxLength={inputMaxLength}
        required
      />
      <p>{message}</p>
    </>
  );
};
