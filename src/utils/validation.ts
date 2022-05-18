import { Dispatch, SetStateAction } from 'react';

export const checkEmail = (currentInput: string, setMessage: Dispatch<SetStateAction<string>>) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (currentInput.length > 0) {
    if (!emailRegex.test(currentInput)) {
      return setMessage('이메일 형식이 아닙니다.');
    }
    if (currentInput.length === 320) {
      return setMessage('이메일 최대 길이는 320자 입니다.');
    }
  }
  return setMessage('');
};

export const checkAuthNumber = (
  authInput: number,
  currentInput: string,
  setMessage: Dispatch<SetStateAction<string>>
) => {
  if (currentInput.length === 6) {
    if (Number(currentInput) === authInput) {
      return setMessage('인증되었습니다.');
    }
    return setMessage('인증 번호가 맞지 않습니다. 다시 입력하여 주세요.');
  }
  return setMessage('');
};

export const checkNickName = (
  currentInput: string,
  setMessage: Dispatch<SetStateAction<string>>,
  isValidNickName: boolean | undefined
) => {
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

export const checkPassword = (
  currentInput: string,
  setMessage: Dispatch<SetStateAction<string>>,
  setCurrentPassword: Dispatch<SetStateAction<string>>
) => {
  const passwordRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$/;

  if (currentInput.length > 0 && !passwordRegex.test(currentInput)) {
    return setMessage(
      '비밀번호는 최소 8자 최대 50자이며, 숫자, 영어, 특수문자가 최소 1개씩 포함되어야 합니다.'
    );
  }
  setCurrentPassword(currentInput);
  return setMessage('');
};

export const checkRetypedPassword = (
  currentInput: string,
  setMessage: Dispatch<SetStateAction<string>>,
  typedPassword: string
) => {
  if (typedPassword !== currentInput) {
    return setMessage('비밀번호가 일치하지 않습니다. 다시 확인해주세요');
  }
  return setMessage('');
};

export const checkPlanTitle = (
  currentInput: string,
  setMessage: Dispatch<SetStateAction<string>>
) => {
  if (currentInput.length === 10) {
    return setMessage('일정명은 최대 10자 입니다.');
  }
  return setMessage('');
};

export const checkCategoryTitle = (
  currentInput: string,
  setMessage: Dispatch<SetStateAction<string>>
) => {
  if (currentInput.length === 15) {
    return setMessage('카테고리 명은 최대 15자 입니다.');
  }
  return setMessage('');
};
