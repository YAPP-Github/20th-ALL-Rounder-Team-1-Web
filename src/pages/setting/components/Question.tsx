import styled from 'styled-components';

import { Button } from '@/common';

export const Question = () => {
  return (
    <Wrapper>
      <Title>문의하실 내용을 작성해주세요 :)</Title>
      <Description>문의에 대한 답변은 로그인된 이메일로 전송됩니다.</Description>
      <TextArea placeholder="내용을 입력해주세요."></TextArea>
      <Button className="question_button" onClick={() => console.log('문의하기')}>
        문의하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0px;
`;

const Title = styled.h1`
  width: 157px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: ${({ theme: { colors } }) => colors.Gray900};
`;

const Description = styled.p`
  ${({ theme: { fonts } }) => fonts.Body1};
  color: ${({ theme: { colors } }) => colors.Gray500};
  margin-top: 20px;
  margin-bottom: 32px;
`;

const TextArea = styled.textarea`
  display: block;
  resize: none;
  width: 699px;
  height: 320px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  ${({ theme: { fonts } }) => fonts.Body1}
  background-color: ${({ theme: { colors } }) => colors.Gray100};
  margin-bottom: 36px;

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;
