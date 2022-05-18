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

  const checkEmail = () => {
    const currentInput = inputValue;
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (currentInput.length) {
      if (!emailRegex.test(currentInput)) {
        return setMessage('이메일 형식이 아닙니다.');
      }
      if (currentInput.length === 320) {
        return setMessage('이메일 최대 길이는 320자 입니다.');
      }
    }
    return setMessage('');
  };

  const checkAuthNumber = (authInput: number) => {
    const currentInput = inputValue;

    if (currentInput.length === 6) {
      if (Number(currentInput) === authInput) {
        return setMessage('인증되었습니다.');
      }
      return setMessage('인증 번호가 맞지 않습니다. 다시 입력하여 주세요.');
    }
    return setMessage('');
  };

  const checkNickName = () => {
    const currentInput = inputValue;

    if (currentInput.length === 12) {
      return setMessage('닉네임은 최대 12자입니다.');
    }
    if (isValidNickName === undefined) {
      return setMessage('');
    }
    if (isValidNickName) {
      return setMessage('사용가능한 닉네임 입니다.');
    }
    if (!isValidNickName) {
      return setMessage('이미 사용중인 닉네임 입니다.');
    }
    return setMessage('');
  };

  const checkPassword = () => {
    const currentInput = inputValue;

    const passwordRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$/;

    if (currentInput.length > 0 && !passwordRegex.test(currentInput)) {
      return setMessage(
        '비밀번호는 최소 8자 최대 50자이며, 숫자, 영어, 특수문자가 최소 1개씩 포함되어야 합니다.'
      );
    }

    if (setCurrentPassword) {
      setCurrentPassword(currentInput);
    }
    return setMessage('');
  };

  const checkRetypedPassword = () => {
    const currentInput = inputValue;

    if (typedPassword) {
      if (typedPassword !== currentInput) {
        return setMessage('비밀번호가 일치하지 않습니다. 다시 확인해주세요');
      }
    }
    return setMessage('');
  };

  const checkPlanTitle = () => {
    const currentInput = inputValue;

    if (currentInput.length === 10) {
      return setMessage('일정명은 최대 10자 입니다.');
    }
    return setMessage('');
  };

  const checkCategoryTitle = () => {
    const currentInput = inputValue;

    if (currentInput.length === 15) {
      return setMessage('카테고리 명은 최대 15자 입니다.');
    }
    return setMessage('');
  };

  const checkInput = () => {
    if (type === 'email') {
      return checkEmail();
    }
    if (type === 'authNumber' && authInput) {
      return checkAuthNumber(authInput);
    }
    if (type === 'nickName') {
      return checkNickName();
    }
    if (type === 'password') {
      return checkPassword();
    }
    if (type === 'retypedPassword') {
      return checkRetypedPassword();
    }
    if (type === 'planTitle') {
      return checkPlanTitle();
    }
    if (type === 'categoryTitle') {
      return checkCategoryTitle();
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
