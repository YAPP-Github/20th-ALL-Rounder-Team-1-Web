// import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

// import {
//   checkAuthNumber,
//   checkCategoryTitle,
//   checkEmail,
//   checkNickName,
//   checkPassword,
//   checkPlanTitle,
//   checkRetypedPassword,
// } from '@/utils';

// type PossibleTypes =
//   | 'authNumber'
//   | 'categoryTitle'
//   | 'date'
//   | 'email'
//   | 'nickName'
//   | 'password'
//   | 'planTitle'
//   | 'retypedPassword'
//   | 'time';

interface IProps {
  maxLength?: number;
  type?: string;
  placeholder: string;
  className?: string;
}

export const Input = ({ maxLength, type = 'text', placeholder, className }: IProps) => {
  // const [inputValue, setInputValue] = useState('');
  // const [message, setMessage] = useState('');

  // const checkInput = () => {
  //   if (role === 'authNumber' && authInput) {
  //     return checkAuthNumber(authInput, inputValue, setMessage);
  //   }
  //   if (role === 'categoryTitle') {
  //     return checkCategoryTitle(inputValue, setMessage);
  //   }
  //   if (role === 'email') {
  //     return checkEmail(inputValue, setMessage);
  //   }
  //   if (role === 'nickName') {
  //     return checkNickName(inputValue, isValidNickName, setMessage);
  //   }
  //   if (role === 'password' && setCurrentPassword) {
  //     return checkPassword(inputValue, setCurrentPassword, setMessage);
  //   }
  //   if (role === 'planTitle') {
  //     return checkPlanTitle(inputValue, setMessage);
  //   }
  //   if (role === 'retypedPassword' && typedPassword) {
  //     return checkRetypedPassword(inputValue, setMessage, typedPassword);
  //   }
  // };

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setInputValue(value);
  // };

  return (
    <>
      <StyledInput
        className={cn(className && className)}
        // onChange={onChange}
        // value={inputValue}
        type={type}
        maxLength={maxLength}
        required
        placeholder={placeholder}
      />
      {/* <p>{message}</p> */}
    </>
  );
};

const StyledInput = styled.input`
  &.login_input {
    width: 353px;
    border: 0;
    background-color: ${({ theme: { colors } }) => colors.Gray200};
    padding: 13px 20px;
    border-radius: 12px;
    box-sizing: border-box;
    ${({ theme: { fonts } }) => fonts.Body1};
    ::placeholder {
      color: #aaaeb6;
    }
  }
`;
