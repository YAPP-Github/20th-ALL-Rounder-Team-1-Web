import styled from 'styled-components';

import { Button, Input, PageLayout } from '@/common';

const Agreement = () => {
  return (
    <PageLayout title="비밀번호 찾기 페이지" isHeader={false} isFooter={false}>
      <Main role="main">
        <Title>
          Weekand
          <br />
          서비스 약관에 동의해주세요
        </Title>
        <Input className="login_input" placeholder="이메일을 입력해주세요" />
        <FindPasswordButton
          className="login_button"
          onClick={() => {
            console.log(1);
          }}
        >
          로그인 하러가기
        </FindPasswordButton>
      </Main>
    </PageLayout>
  );
};

export default Agreement;

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
