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

type PossibleTypes =
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
  maxLength?: number;
  isValidNickName?: boolean | undefined;
  role: PossibleTypes;
  setCurrentPassword?: Dispatch<SetStateAction<string>>;
  type: string;
  typedPassword?: string;
}

export const Input = ({
  authInput,
  maxLength,
  isValidNickName,
  role,
  setCurrentPassword,
  type,
  typedPassword,
}: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const checkInput = () => {
    if (role === 'authNumber' && authInput) {
      return checkAuthNumber(authInput, inputValue, setMessage);
    }
    if (role === 'categoryTitle') {
      return checkCategoryTitle(inputValue, setMessage);
    }
    if (role === 'email') {
      return checkEmail(inputValue, setMessage);
    }
    if (role === 'nickName') {
      return checkNickName(inputValue, isValidNickName, setMessage);
    }
    if (role === 'password' && setCurrentPassword) {
      return checkPassword(inputValue, setCurrentPassword, setMessage);
    }
    if (role === 'planTitle') {
      return checkPlanTitle(inputValue, setMessage);
    }
    if (role === 'retypedPassword' && typedPassword) {
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
        type={type}
        name={role}
        id={role}
        maxLength={maxLength}
        required
      />
      <p>{message}</p>
    </>
  );
};
