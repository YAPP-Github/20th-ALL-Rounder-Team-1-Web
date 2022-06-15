import styled from 'styled-components';
import { Button } from './Button';

export const ChangePassword = () => {
  return (
    <>
      <Title>
        <h1>비밀번호를 변경하여</h1>
        <h1>안전하게 관리하세요</h1>
      </Title>
      <Description>비밀번호는 숫자, 영어 조합 8자리 이상 입력해주세요</Description>
      <Input>
        <h1>현재 비밀번호</h1>
        <input type="password" />
      </Input>
      <Input>
        <h1>새로운 비밀번호</h1>
        <input type="password" />
      </Input>
      <Input>
        <h1>비밀번호 확인</h1>
        <input type="password" />
      </Input>
      <Button onClick={() => console.log('완료')}>완료</Button>
    </>
  );
};

const Title = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: start;
  }
`;

const Description = styled.p`
  ${({ theme: { fonts } }) => fonts.Body1};
  color: ${({ theme: { colors } }) => colors.Gray500};
  text-align: start;
  margin-top: 6px;
  margin-bottom: 91px;
`;

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px;
  h1 {
    ${({ theme: { fonts } }) => fonts.SubHead2};
  }
`;
