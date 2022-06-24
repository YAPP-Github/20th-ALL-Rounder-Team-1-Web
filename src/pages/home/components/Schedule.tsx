import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ScheduleProps {
  currentIndex: number;
  categoryColor: string;
  name: string;
  process: string;
  startTime: string;
  endTime: string;
  likeNumber: number;
  likeTypes: string[];
  isFriend?: boolean;
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
  clickedIndex: number;
  setClickedIndex: Dispatch<SetStateAction<number>>;
}

export const Schedule = ({
  currentIndex,
  categoryColor,
  name,
  process,
  startTime,
  endTime,
  likeNumber,
  likeTypes,
  isFriend = true,
  setIsCategoryClicked,
  clickedIndex,
  setClickedIndex,
}: ScheduleProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsCategoryClicked(true);
    setClickedIndex(currentIndex);
  };

  useEffect(() => {
    if (currentIndex === clickedIndex) {
      return setIsClicked(true);
    }
    setIsClicked(false);
  }, [clickedIndex]);

  return (
    <Wrapper onContextMenu={handleRightClick} isClicked={isClicked}>
      <CategoryAndName categoryColor={categoryColor}>
        <div />
        <h1>{name}</h1>
      </CategoryAndName>
      <TimeAndLike>
        <ProcessAndTime>
          <img
            src={`../../assets/${process}_icon.png`}
            alt="Schedule Process Icon"
            width={11.67}
            height={11.67}
          />
          <h2>
            {startTime} - {endTime}
          </h2>
        </ProcessAndTime>
        <LikeCountAndIcon count={likeTypes.length} isFriend={isFriend}>
          {likeNumber > 0 && <p>{likeNumber}</p>}
          <Icons isFriend={isFriend}>
            {likeTypes.map((likeType) => (
              <img
                src={`../../assets/emoji_${likeType}.png`}
                alt="Smiling Sticker"
                width={26.6}
                height={26.6}
              />
            ))}
          </Icons>
          {isFriend && <img src="../../assets/sticker_button.png" alt="Smiling Sticker" />}
        </LikeCountAndIcon>
      </TimeAndLike>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isClicked: boolean }>`
  width: 594px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 6px;
  background-color: ${({ theme: { colors }, isClicked }) =>
    isClicked ? colors.WeekandBlueSub : '#fff'};
`;

const CategoryAndName = styled.div<{ categoryColor: string }>`
  display: flex;
  align-items: center;
  width: 301px;
  gap: 9px;

  div {
    width: 11.67px;
    height: 11.67px;
    border-radius: 3px;
    background-color: ${({ categoryColor }) => categoryColor};
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

  h2 {
    ${({ theme: { fonts } }) => fonts.Body1}
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;

const LikeCountAndIcon = styled.div<{ count: number; isFriend: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  p {
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
    right: ${({ count, isFriend }) => (isFriend ? `${count * 20 + 55}px` : `${count * 20 + 15}px`)};
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;

const Icons = styled.div<{ isFriend: boolean }>`
  display: flex;
  align-items: center;

  img:first-child {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '40px' : '0px')};
  }

  img:nth-child(2) {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '60px' : '20px')};
  }

  img:nth-child(3) {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '80px' : '40px')};
  }

  img:nth-child(4) {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '100px' : '60px')};
  }
`;
