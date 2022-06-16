import styled from 'styled-components';

interface ScheduleProps {
  categoryColor: string;
  name: string;
  process: string;
  startTime: string;
  endTime: string;
  likeNumber: number;
  likeTypes: string[];
  isFriend?: boolean;
}

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
        <LikeCountAndIcon count={4}>
          <p>12</p>
          <Icons>
            <img src="../../assets/emoji_smile.png" alt="Smiling Sticker" />
            <img src="../../assets/smile_sticker.png" alt="Smiling Sticker" />
            <img src="../../assets/smile_sticker.png" alt="Smiling Sticker" />
            <img src="../../assets/smile_sticker.png" alt="Smiling Sticker" />
          </Icons>
          <img src="../../assets/sticker_button.png" alt="Smiling Sticker" />
        </LikeCountAndIcon>
      </TimeAndLike>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 594px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 6px;
  border: 1px solid black;
  background-color: #fff;
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

const LikeCountAndIcon = styled.div<{ count: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  p {
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
    right: ${({ count }) => `${count * 20 + 55}px`};
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 26.6px;
    height: 26.6px;
  }

  img:first-child {
    position: absolute;
    right: 40px;
  }

  img:nth-child(2) {
    position: absolute;
    right: 60px;
  }

  img:nth-child(3) {
    position: absolute;
    right: 80px;
  }

  img:nth-child(4) {
    position: absolute;
    right: 100px;
  }
`;
