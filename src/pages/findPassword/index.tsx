import styled from 'styled-components';

import { Button, Input, PageLayout } from '@/common';

const FindPassword = () => {
  return (
    <PageLayout isHeader={false} isFooter={false}>
      <Main role="main">
        <Title>비밀번호를 잊으셨나요?</Title>
        <Description>
          아래 이메일로 임시 비밀번호를 보내드려요.
          <br />
          임시 비밀번호로 로그인하신 후에 계정관리에서
          <br />
          비밀번호를 변경해주세요.
        </Description>
        <Input className="login_input" placeholder="이메일을 입력해주세요" />
        <FindPasswordButton
          className="login_button"
          onClick={() => {
            console.log(1);
          }}
        >
          임시비밀번호 발급
        </FindPasswordButton>
      </Main>
    </PageLayout>
  );
};

export default FindPassword;

const Main = styled.div`
  width: 354px;
  margin: 0 auto;
  margin-top: calc((100vh - 345px) / 2);
`;

const Title = styled.span`
  ${({ theme: { fonts } }) => fonts.Head0}
`;

const Description = styled.div`
  ${({ theme: { fonts } }) => fonts.Body1('Gray600')}
  margin: 30px 0 32px 0;
`;

const FindPasswordButton = styled(Button)`
  margin-top: 60px;
`;
