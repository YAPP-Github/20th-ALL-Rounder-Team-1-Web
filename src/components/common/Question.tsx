import styled from 'styled-components';

export const Question = () => {
  return (
    <>
      <Title>
        <h1>문의하실 내용을</h1>
        <h1>작성해주세요</h1>
      </Title>
      <Description>문의에 대한 답변은 로그인된 이메일로 전송됩니다.</Description>
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
