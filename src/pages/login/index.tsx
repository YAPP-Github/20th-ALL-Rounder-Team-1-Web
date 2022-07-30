import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useLogin } from '@/api';
import { Button, Input, InputRef, PageLayout } from '@/common';
import { ToastContext } from '@/contexts';
import { setStorage } from '@/utils';

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const [isChecked, setIsChecked] = useState(false);

  const { setToast } = useContext(ToastContext);

  const { login } = useLogin();

  const onClickAutoLogin = () => setIsChecked(!isChecked);

  const chkLogin = async () => {
    const { data, error } = await login({
      variables: {
        loginInput: {
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        },
      },
    });

    if (data) {
      const { login } = data;
      setStorage('accessToken', login.accessToken);
      setStorage('refreshToken', login.refreshToken);
      navigate('/');
      return;
    }

    if (error) {
      setToast('error', error.message);
      return;
    }
  };

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <Main role="main">
        <SmilingImage>
          <img src="../assets/smiling_emoji.png" />
        </SmilingImage>
        <LoginForm>
          <Introduce>
            반가워요!
            <br />
            함께 일정 관리해요 :)
          </Introduce>
          <LoginInput>
            <Input className="login_input" placeholder="이메일을 입력해주세요" ref={emailRef} />
            <Input
              className="login_input"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              ref={passwordRef}
            />
          </LoginInput>
          <Utils isChecked={isChecked}>
            <label className="auto_login" onClick={onClickAutoLogin}>
              자동로그인
            </label>
            <Link to="/get-temp-password" className="get_temp_password">
              비밀번호 찾기
            </Link>
          </Utils>
          <Buttons>
            <Button className="login_button" onClick={chkLogin}>
              로그인
            </Button>
            <Separate>처음이신가요?</Separate>
            <Button
              className="register_button"
              onClick={() => {
                navigate('/register');
              }}
            >
              회원가입
            </Button>
          </Buttons>
        </LoginForm>
      </Main>
    </PageLayout>
  );
};

export default Login;

const Main = styled.div`
  display: flex;
  align-items: center;
`;

const SmilingImage = styled.div`
  line-height: 100vh;
  img {
    vertical-align: middle;
  }
`;

const LoginForm = styled.div`
  margin-left: 78px;
`;

const Introduce = styled.div`
  ${({ theme: { fonts } }) => fonts.Title}
  width: 183px;
  text-align: left;
`;

const LoginInput = styled.div`
  margin-top: 40px;
  width: 353px;

  Input + Input {
    margin-top: 12px;
  }
`;

const Utils = styled.div<{ isChecked: boolean }>`
  margin-top: 13px;
  ${({ theme: { fonts } }) => fonts.Body2}

  .auto_login::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    margin: -1px 8px 0 0;
    background-size: 455px 385px;

    ${({ isChecked }) =>
      isChecked ? `background-position: -10px -351px;` : `background-position: -373px -290px;`}
  }

  .auto_login {
    float: left;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .get_temp_password {
    color: ${({ theme: { colors } }) => colors.Gray400};
    float: right;
    margin-right: 4px;
  }

  &:after {
    ${({ theme: { clearFloat } }) => clearFloat}
  }
`;

const Buttons = styled.div`
  position: relative;
  width: 353px;
  margin-top: 61px;
`;

const Separate = styled.div`
  margin: 22px 0 22px 135px;
  ${({ theme: { fonts } }) => fonts.Body2('Gray400')}

  &:before {
    content: '';
    position: absolute;
    top: 93px;
    left: 0;
    width: 120px;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.Gray200};
  }
  &:after {
    content: '';
    position: absolute;
    top: 93px;
    right: 0;
    width: 120px;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.Gray200};
  }
`;
