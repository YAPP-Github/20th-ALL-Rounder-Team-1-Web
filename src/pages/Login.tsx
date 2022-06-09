import styled from 'styled-components';

import { PageLayout, Input, Button } from '@/components';

const Login = () => {
  return (
    <PageLayout isFooter={false}>
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
          <Utils>
            <span className="auto_login">자동로그인</span>
            <span className="find_password">비밀번호 찾기</span>
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
                console.log(1);
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
  ${({ theme: { fonts } }) => fonts.Head0}
  width: 183px;
  text-align: left;
`;

const LoginInput = styled.div`
  margin-top: 40px;
  width: 353px;
`;

const Utils = styled.div`
  margin-top: 13px;
  ${({ theme: { fonts } }) => fonts.Body2}

  .auto_login {
    float: left;
    margin-left: 25px;
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
  width: 353px;
  margin-top: 61px;
`;

const Separate = styled.div`
  margin: 22px 0;
  ${({ theme: { fonts } }) => fonts.Body2('Gray400')}
`;
