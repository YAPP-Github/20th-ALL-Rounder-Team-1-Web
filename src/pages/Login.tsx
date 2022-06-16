import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageLayout, Input, Button } from '@/components';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickAutoLogin = () => setIsChecked(!isChecked);

  return (
    <PageLayout title="로그인 페이지" isHeader={false} isFooter={false}>
      <Main role="main">
        <SmilingImage>
          <img src="../assets/smiling_emoji.png" width={569} height={511} />
        </SmilingImage>
        <LoginForm>
          <Introduce>
            반가워요!
            <br />
            함께 일정 관리해요 :)
          </Introduce>
          <LoginInput>
            <Input className="login_input" placeholder="이메일을 입력해주세요" />
            <Input className="login_input" type="password" placeholder="비밀번호를 입력해주세요" />
          </LoginInput>
          <Utils isChecked={isChecked}>
            <label className="auto_login" onClick={onClickAutoLogin}>
              자동로그인
            </label>
            <Link to="/find-password" className="find_password">
              비밀번호 찾기
            </Link>
          </Utils>
          <Buttons>
            <Button
              className="login_button"
              onClick={() => {
                console.log(1);
              }}
            >
              로그인
            </Button>
            <Separate>처음이신가요?</Separate>
            <Button
              className="register_button"
              onClick={() => {
                location.href = '/register';
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
  margin-top: -50px;
  margin-left: 188px;
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
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 18, 18)}
    margin: 2px 11px 0 0;
    background-size: 310px 270px;
    background-position: -186px -236px;
    ${({ isChecked }) =>
      isChecked &&
      `
    background-position: -224px -236px;
  `}
  }

  .auto_login {
    float: left;
  }

  .find_password {
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
  margin: 22px 0;
  ${({ theme: { fonts } }) => fonts.Body2('Gray400')}

  &:before {
    content: '';
    position: absolute;
    top: 93px;
    left: 0;
    width: 120px;
    height: 1px;
    background-color: #eceff2;
  }
  &:after {
    content: '';
    position: absolute;
    top: 93px;
    right: 0;
    width: 120px;
    height: 1px;
    background-color: #eceff2;
  }
`;
