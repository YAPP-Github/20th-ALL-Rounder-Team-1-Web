import {
  checkAuthNumber,
  checkCategoryTitle,
  checkEmail,
  checkNickName,
  checkPassword,
  checkPlanTitle,
  checkRetypedPassword,
} from '@/utils/validation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type InputType =
  | 'email'
  | 'authNumber'
  | 'nickName'
  | 'password'
  | 'retypedPassword'
  | 'planTitle'
  | 'time'
  | 'date'
  | 'categoryTitle';

interface IProps {
  type: InputType;
  authInput?: number;
  isValidNickName?: boolean | undefined;
  setCurrentPassword?: Dispatch<SetStateAction<string>>;
  typedPassword?: string;
}

export const Input = ({
  type,
  authInput,
  isValidNickName,
  setCurrentPassword,
  typedPassword,
}: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const checkInput = () => {
    if (type === 'email') {
      return checkEmail(inputValue, setMessage);
    }
    if (type === 'authNumber' && authInput) {
      return checkAuthNumber(authInput, inputValue, setMessage);
    }
    if (type === 'nickName') {
      return checkNickName(inputValue, setMessage, isValidNickName);
    }
    if (type === 'password' && setCurrentPassword) {
      return checkPassword(inputValue, setMessage, setCurrentPassword);
    }
    if (type === 'retypedPassword' && typedPassword) {
      return checkRetypedPassword(inputValue, setMessage, typedPassword);
    }
    if (type === 'planTitle') {
      return checkPlanTitle(inputValue, setMessage);
    }
    if (type === 'categoryTitle') {
      return checkCategoryTitle(inputValue, setMessage);
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
      {type === 'time' && (
        <>
          <input onChange={onChange} type="time" name="time" id="time" required />
          <p>{message}</p>
        </>
      )}
      {type === 'date' && (
        <>
          <input onChange={onChange} type="date" name="date" id="date" required />
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
    </>
  );
};
