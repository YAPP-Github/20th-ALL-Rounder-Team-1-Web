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
  isValidNickName?: boolean | undefined;
  setCurrentPassword?: Dispatch<SetStateAction<string>>;
  type: InputType;
  typedPassword?: string;
}

export const Input = ({
  authInput,
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
      {type === 'authNumber' && (
        <>
          <input
            onChange={onChange}
            type="text"
            name="authNumber"
            id="authNumber"
            maxLength={6}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'categoryTitle' && (
        <>
          <input
            onChange={onChange}
            type="text"
            name="categoryTitle"
            id="categoryTitle"
            maxLength={15}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'date' && (
        <>
          <input onChange={onChange} type="date" name="date" id="date" required />
          <p>{message}</p>
        </>
      )}
      {type === 'email' && (
        <>
          <input
            onChange={onChange}
            value={inputValue}
            name="email"
            id="email"
            maxLength={320}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'nickName' && (
        <>
          <input
            onChange={onChange}
            type="text"
            name="nickName"
            id="nickName"
            maxLength={12}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'password' && (
        <>
          <input
            onChange={onChange}
            type="password"
            name="password"
            id="password"
            maxLength={50}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'planTitle' && (
        <>
          <input
            onChange={onChange}
            type="text"
            name="planTitle"
            id="planTitle"
            maxLength={10}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'retypedPassword' && (
        <>
          <input
            onChange={onChange}
            type="password"
            name="retypedPassword"
            id="retypedPassword"
            maxLength={50}
            required
          />
          <p>{message}</p>
        </>
      )}
      {type === 'time' && (
        <>
          <input onChange={onChange} type="time" name="time" id="time" required />
          <p>{message}</p>
        </>
      )}
    </>
  );
};
