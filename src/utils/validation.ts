import { Dispatch, SetStateAction } from 'react';

const REGEX = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: /^(?=.*[a-zA-z])(?=.*[0-9]).{8,50}$/,
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

export const checkEmailTempPassword = (email: string | undefined) => {
  const emailRegex = REGEX.EMAIL;

  if (!email || (email.length > 0 && !email.match(emailRegex))) {
    return { type: 'error', message: '유효하지 않은 이메일 주소입니다' };
  }

  return { type: '', message: '' };
};

export const checkCertificateNumber = (isRightCertificateNumber: boolean) => {
  if (isRightCertificateNumber) {
    return { type: 'success', message: '인증이 완료되었습니다' };
  }

  return { type: 'error', message: '잘못된 인증번호입니다' };
};

export const checkNicknameValidation = (isDuplicateNickname: boolean) => {
  if (isDuplicateNickname) {
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

export const checkPurpose = (purpose: string) => {
  if (purpose.length > 20) {
    return { type: 'error', message: '한줄 목표는 최대 20자입니다' };
  }

  return { type: 'success', message: '' };
};
