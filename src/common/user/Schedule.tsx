import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/common';
interface ScheduleProps {
  currentIndex: number;
  categoryColor: string;
  name: string;
  process: string;
  startTime: number;
  endTime: number;
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
  const [show, setShow] = useState(false);

  const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsCategoryClicked(true);
    setClickedIndex(currentIndex);
  };

  const getTime = (time: number) => {
    const hour = new Date(time).getHours();
    const minute = new Date(time).getMinutes();

    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
  };

  useEffect(() => {
    const isClicked = currentIndex === clickedIndex;
    setIsClicked(isClicked);
  }, [clickedIndex]);

  return (
    <Wrapper onContextMenu={handleRightClick} isClicked={isClicked}>
      <CategoryAndName categoryColor={categoryColor}>
        <div />
        <h1>{name}</h1>
      </CategoryAndName>
      <TimeAndLike>
        <ProcessAndTime>
          <i className={process} />
          <h2>{`${getTime(startTime)} - ${getTime(endTime)}`}</h2>
        </ProcessAndTime>
        <LikeCountAndIcon count={likeTypes.length} isFriend={isFriend}>
          {likeNumber > 0 && <p>{likeNumber}</p>}
          <Icons isFriend={isFriend}>
            {likeTypes.map((likeType) => (
              <i className={likeType} />
            ))}
          </Icons>
          {show && (
            <LikeWrapper>
              <LikeButton className="like">
                <LinkButtonText>좋아요</LinkButtonText>
              </LikeButton>
              <LikeButton className="nice">
                <LinkButtonText>대단해요</LinkButtonText>
              </LikeButton>
              <LikeButton className="good">
                <LinkButtonText>멋져요</LinkButtonText>
              </LikeButton>
              <LikeButton className="conglaturation">
                <LinkButtonText>응원해요</LinkButtonText>
              </LikeButton>
            </LikeWrapper>
          )}
          {isFriend && <LikeSticker onClick={() => setShow(!show)} />}
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

  div {
    width: 11.67px;
    height: 11.67px;
    margin: 8.167px;
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

  h2 {
    ${({ theme: { fonts } }) => fonts.Body1}
    color: ${({ theme: { colors } }) => colors.Gray400};
  }

  i.INCOMPLETED {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -373px -106px;
  }

  i.COMPLETED {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -298px -303px;
  }

  i.SKIP {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -373px -154px;
  }

  i.UNDETERMINED {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -202px -303px;
  }

  i.NOT_YET {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -373px -10px;
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

  i.GOOD {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -106px -303px;
  }

  i.CHEER_UP {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -154px -303px;
  }

  i.COOL {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -58px -303px;
  }

  i.LIKE {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -10px -303px;
  }

  i:first-child {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '40px' : '0px')};
  }

  i:nth-child(2) {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '60px' : '20px')};
  }

  i:nth-child(3) {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '80px' : '40px')};
  }

  i:nth-child(4) {
    position: absolute;
    right: ${({ isFriend }) => (isFriend ? '100px' : '60px')};
  }
`;

const LikeSticker = styled(Button)`
  ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
  background-position: -321px -62px;
`;

const LikeWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: -220px;
  left: -330px;
  width: 452px;
  height: 177px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px ${({ theme: { colors } }) => colors.Gray200};
  padding: 40px 40px 35px;

  &:after {
    content: '';
    position: absolute;
    top: 160px;
    right: 80px;
    display: block;
    width: 37px;
    height: 36px;
    background-color: #fff;
    border-radius: 4px;
    transform: rotate(135deg);
  }
`;

const LikeButton = styled(Button)`
  width: 72px;
  height: 72px;
  position: relative;
  z-index: 10;

  &.like:before {
    content: '';
    display: block;
    margin-top: 16px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 43, 43)}
    background-position: -150px -73px;
    z-index: 10;
  }

  &.nice:before {
    content: '';
    display: block;
    margin-top: 16px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 43, 43)}
    background-position: -150px -10px;
    z-index: 10;
  }

  &.good:before {
    content: '';
    display: block;
    margin-top: 16px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 43, 43)}
    background-position: -73px -80px;
    z-index: 10;
  }

  &.conglaturation:before {
    content: '';
    display: block;
    margin-top: 16px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 43, 43)}
    background-position: -10px -80px;
    z-index: 10;
  }

  & + & {
    margin-left: 28px;
  }
`;

const LinkButtonText = styled.div`
  ${({ theme: { fonts } }) => fonts.Body2}
  margin-top: 25px;

  &:before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    background-color: #f5f7f8;
    border-radius: 28.8px;
  }
`;
