import styled from 'styled-components';

export const Schedule = () => {
  return (
    <Wrapper>
      <CategoryAndName>
        <div />
        <h1>아침 런닝하기</h1>
      </CategoryAndName>
      <TimeAndLike>
        <ProcessAndTime>
          <img src="../../assets/fail_icon.png" alt="Schedule Fail Icon" />
          <h2>07:00 - 08:00</h2>
        </ProcessAndTime>
        <LikeCountAndIcon>
          <p>12</p>
          <img src="../../assets/smile_sticker.png" alt="Smiling Sticker" />
        </LikeCountAndIcon>
      </TimeAndLike>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 610px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 6px;
  border: 1px solid black;
`;

const CategoryAndName = styled.div`
  display: flex;
  align-items: center;
  width: 301px;
  gap: 9px;

  div {
    width: 11.67px;
    height: 11.67px;
    border-radius: 3px;
    background-color: #b6eebc;
  }

  h1 {
    ${({ theme: { fonts } }) => fonts.SubHead1}
  }
`;

const TimeAndLike = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ProcessAndTime = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 11.67px;
    height: 11.67px;
  }

  h2 {
    ${({ theme: { fonts } }) => fonts.Body1}
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;

const LikeCountAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
    color: ${({ theme: { colors } }) => colors.Gray400};
  }

  img {
    width: 26.6px;
    height: 26.6px;
  }
`;
