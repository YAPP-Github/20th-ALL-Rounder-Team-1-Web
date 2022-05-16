import { useEffect, useState } from 'react';

type InputType = 'email';

interface IProps {
  type: InputType;
}

export const Input = ({ type }: IProps) => {
  const [inputValue, setInputValue] = useState({
    email: '',
  });
  const [message, setMessage] = useState({
    email: '',
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

  const checkInput = () => {
    if (type === 'email') {
      return checkEmail();
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
            id="email"
            maxLength={320}
          />
          <p>{message['email']}</p>
        </>
      )}
    </>
  );
};
