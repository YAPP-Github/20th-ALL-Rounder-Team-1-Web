import styled from 'styled-components';

export const Category = () => {
  return (
    <Wrapper>
      <Color />
      <Content>
        <p>공개 여부</p>
        <h1>운동</h1>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 352px;
  height: 73px;
  border-radius: 10px;
  padding: 12px 14px;
  background-color: #fff;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const Color = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 8px;
  background-color: #ffc8c8;
  margin-right: 12px;
`;

const Content = styled.div`
  text-align: start;
  p {
    color: ${({ theme: { colors } }) => colors.Gray500};
    ${({ theme: { fonts } }) => fonts.Body2}
  }

  h1 {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead1}
  }
`;
