import { Dispatch, SetStateAction } from 'react';

const REGEX = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$/,
};

export const checkEmail = (email: string) => {
  const emailRegex = REGEX.EMAIL;

  if (!email) {
    return { type: 'error', message: '이메일을 입력해주세요' };
  }

  if (email.length > 0 && !email.match(emailRegex)) {
    return { type: 'error', message: '올바른 형식으로 입력해주세요' };
  }

  return { type: 'success', message: '유효한 이메일입니다' };
};

export const checkCertificateNumber = (certificateNumber: string) => {
  if (certificateNumber === '1234') {
    return { type: 'success', message: '인증이 완료되었습니다' };
  }

  return { type: 'error', message: '잘못된 인증번호입니다' };
};

export const checkNickname = (nickname: string) => {
  if (nickname === '장동균') {
    return { type: 'error', message: '중복된 닉네임입니다' };
  }

  return { type: 'success', message: '사용 가능한 닉네임입니다' };
};

export const checkPassword = (password: string) => {
  const passwordRegex = REGEX.PASSWORD;
  if (!password) {
    return { type: 'normal', message: '숫자, 영어 조합 8자리 이상' };
  }
  if (password.length > 0 && !password.match(passwordRegex)) {
    return {
      type: 'error',
      message: '숫자, 영어 조합 8자리 이상 입력해주세요',
    };
  }
  return { type: 'success', message: '올바른 형식의 비밀번호입니다' };
};

export const checkPasswordConfirm = (passwordConfirm: string, password: string) => {
  if (!passwordConfirm && !password) {
    return {
      type: '',
      message: '',
    };
  }
  if (passwordConfirm !== password) {
    return {
      type: 'error',
      message: '비밀번호가 일치하지 않습니다',
    };
  }
  return { type: 'success', message: '비밀번호가 일치합니다' };
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
