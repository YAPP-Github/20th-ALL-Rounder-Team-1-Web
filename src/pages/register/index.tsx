import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ValidationControlledInput, ValidationUncontrolledInput } from './components';

import { Button, InputRef, PageLayout } from '@/common';

const Register = () => {
  const navigate = useNavigate();

  const emailRef = useRef<InputRef>(null);
  const validationNumRef = useRef<InputRef>(null);
  const nicknameRef = useRef<InputRef>(null);

  const [emailValidation, setEmailValidation] = useState({ type: '', message: '' });
  const [numValidation, setNumValidation] = useState({ type: '', message: '' });
  const [nicknameValidation, setNicknameValidation] = useState({ type: '', message: '' });
  const [passwordValidation, setPasswordValidation] = useState({ type: '', message: '' });
  const [passwordConfirmValidation, setPasswordConfirmValidation] = useState({
    type: '',
    message: '',
  });

  const [emailButtonDisabled, setEmailButtonDisabled] = useState(false);
  const [numValidationButtonDisabled, setNumValidationButtonDisabled] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const chkRegisterButtonDisabled = () => {
    if (
      emailValidation.type === 'success' &&
      numValidation.type === 'success' &&
      nicknameValidation.type === 'success' &&
      passwordValidation.type === 'success' &&
      password === passwordConfirm
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (emailValidation.type === 'success' && numValidation.type === 'success') {
      setEmailButtonDisabled(true);
      setNumValidationButtonDisabled(true);
    }
  }, [numValidation.type]);

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <Main role="main">
        <form action="#">
          <Title>Weekand와 함께 시작해요!</Title>
          <ValidationUncontrolledInput
            htmlFor="email"
            label="이메일"
            buttonText="인증"
            placeholder="이메일을 입력해주세요"
            validationType="checkEmail"
            validation={emailValidation}
            setValidation={setEmailValidation}
            buttonDisabled={emailButtonDisabled}
            ref={emailRef}
          />
          <ValidationUncontrolledInput
            htmlFor="certification_number"
            label="인증번호"
            buttonText="확인"
            placeholder="인증번호를 입력해주세요"
            validationType="checkCertificateNumber"
            validation={numValidation}
            setValidation={setNumValidation}
            buttonDisabled={numValidationButtonDisabled}
            ref={validationNumRef}
          />
          <ValidationUncontrolledInput
            htmlFor="nickname"
            label="닉네임"
            buttonText="중복확인"
            placeholder="닉네임을 입력해주세요"
            validationType="checkNickname"
            validation={nicknameValidation}
            setValidation={setNicknameValidation}
            ref={nicknameRef}
          />
          <ValidationControlledInput
            value={password}
            setValue={setPassword}
            htmlFor="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            validationType="password"
            validation={passwordValidation}
            setValidation={setPasswordValidation}
          />
          <ValidationControlledInput
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            htmlFor="password_confirm"
            label="비밀번호 확인"
            placeholder="비밀번호를 확인해주세요"
            type="password"
            validationType="password_confirm"
            validation={passwordConfirmValidation}
            setValidation={setPasswordConfirmValidation}
            password={password}
          />
          <RegisterButton
            className="login_button"
            type="submit"
            disabled={chkRegisterButtonDisabled()}
            onClick={() => {
              navigate('/select-interest');
            }}
          >
            다음
          </RegisterButton>
        </form>
      </Main>
    </PageLayout>
  );
};

export default Register;

const Main = styled.div`
  width: 354px;
  margin: 0 auto;
  margin-top: calc((100vh - 718px) / 2);
  text-align: left;

  form {
    div + div {
      margin-top: 24px;
    }
  }
`;

const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.Title};
  margin-bottom: 50px;
`;

const RegisterButton = styled(Button)`
  margin-top: 80px;
`;
