import { useEffect, useState } from 'react';

type InputType = 'email' | 'authNumber' | 'nickName' | 'password';

interface IProps {
  type: InputType;
  authInput?: number;
  isValidNickName?: boolean | undefined;
}

export const Input = ({ type, authInput, isValidNickName }: IProps) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    authNumber: '',
    nickName: '',
    password: '',
  });
  const [message, setMessage] = useState({
    email: '',
    authNumber: '',
    nickName: '',
    password: '',
  });

  const checkEmail = () => {
    const currentInput = inputValue['email'];
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (currentInput.length) {
      if (!emailRegex.test(currentInput)) {
        return setMessage({ ...message, email: '이메일 형식이 아닙니다.' });
      }
      if (currentInput.length === 320) {
        return setMessage({ ...message, email: '이메일 최대 길이는 320자 입니다.' });
      }
    }
    return setMessage({ ...message, email: '' });
  };

  const checkAuthNumber = (authInput: number) => {
    const currentInput = inputValue['authNumber'];

    if (currentInput.length === 6) {
      if (Number(currentInput) === authInput) {
        return setMessage({ ...message, authNumber: '인증되었습니다.' });
      }
      return setMessage({
        ...message,
        authNumber: '인증 번호가 맞지 않습니다. 다시 입력하여 주세요.',
      });
    }
    return setMessage({ ...message, authNumber: '' });
  };

  const checkNickName = () => {
    const currentInput = inputValue['nickName'];

    if (currentInput.length === 12) {
      return setMessage({ ...message, nickName: '닉네임은 최대 12자입니다.' });
    }
    if (isValidNickName === undefined) {
      return setMessage({ ...message, nickName: '' });
    }
    if (isValidNickName) {
      return setMessage({ ...message, nickName: '사용가능한 닉네임 입니다.' });
    }
    if (!isValidNickName) {
      return setMessage({ ...message, nickName: '이미 사용중인 닉네임 입니다.' });
    }
    return setMessage({ ...message, nickName: '' });
  };

  const checkPassword = () => {
    const currentInput = inputValue['password'];

    const passwordRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$/;

    if (currentInput.length > 0 && !passwordRegex.test(currentInput)) {
      return setMessage({
        ...message,
        password:
          '비밀번호는 최소 8자 최대 50자이며, 숫자, 영어, 특수문자가 최소 1개씩 포함되어야 합니다.',
      });
    }
    return setMessage({ ...message, password: '' });
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
  };

  const onChange = (inputType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue({ ...inputValue, [inputType]: value });
  };

  useEffect(() => {
    checkInput();
  }, [inputValue[type]]);

  return (
    <>
      {type === 'email' && (
        <>
          <input
            onChange={(event) => onChange('email', event)}
            value={inputValue['email']}
            name="email"
            id="email"
            maxLength={320}
          />
          <p>{message['email']}</p>
        </>
      )}
      {type === 'authNumber' && (
        <>
          <input
            onChange={(event) => onChange('authNumber', event)}
            type="text"
            name="authNumber"
            id="authNumber"
            maxLength={6}
          />
          <p>{message['authNumber']}</p>
        </>
      )}
      {type === 'nickName' && (
        <>
          <input
            onChange={(event) => onChange('nickName', event)}
            type="text"
            name="nickName"
            id="nickName"
            maxLength={12}
          />
          <p>{message['nickName']}</p>
        </>
      )}
      {type === 'password' && (
        <>
          <input
            onChange={(event) => onChange('password', event)}
            type="password"
            name="password"
            id="password"
            maxLength={50}
          />
          <p>{message['password']}</p>
        </>
      )}
    </>
  );
};
