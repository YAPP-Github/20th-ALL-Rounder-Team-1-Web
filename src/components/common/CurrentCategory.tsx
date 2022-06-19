import styled from 'styled-components';

export const CurrentCategory = () => {
  return (
    <Wrapper>
      <p>카테고리</p>
      <img src="../../assets/setting_right_button.png" alt="" />
      <Info>
        <Color />
        <p>Google 캘린더 시작 Google</p>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 86px;

  p {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.Title}
    margin-right: 16.64px;
  }

  img {
    width: 6.55px;
    height: 11.15px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20.81px;

  p {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.Title}
  }
`;

const Color = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #ffc8c8;
  margin-right: 8px;
`;
