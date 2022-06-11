import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FriendStory } from './FriendStory';
import { calculateEndX } from '@/utils';

const friends = [
  { id: 1, name: '손흥민', imgUrl: '' },
  { id: 2, name: 'Morant', imgUrl: '' },
  { id: 3, name: 'Cody', imgUrl: '' },
  { id: 4, name: 'Woody', imgUrl: '' },
  { id: 5, name: 'Corey', imgUrl: '' },
  { id: 6, name: 'Trae', imgUrl: '' },
  { id: 7, name: 'James', imgUrl: '' },
  { id: 8, name: '1', imgUrl: '' },
  { id: 9, name: '2', imgUrl: '' },
  { id: 10, name: '3', imgUrl: '' },
  { id: 11, name: '4', imgUrl: '' },
  { id: 12, name: '5', imgUrl: '' },
  { id: 13, name: '6', imgUrl: '' },
  { id: 14, name: '7', imgUrl: '' },
  { id: 15, name: '8', imgUrl: '' },
  { id: 16, name: '9', imgUrl: '' },
  { id: 17, name: '10', imgUrl: '' },
]; // 서버가 완성되면 실제 데이터로 수정하면 됩니다.

export const FriendStories = () => {
  const [currentX, setCurrentX] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const endX = calculateEndX(friends.length);

  const handleLeftButton = () => {
    if (currentX === 0) {
      return setShowLeftButton(false);
    }
    setShowLeftButton(true);
  };

  const handleRightButton = () => {
    if (currentX === endX) {
      return setShowRightButton(false);
    }
    setShowRightButton(true);
  };

  useEffect(() => {
    handleLeftButton();
    handleRightButton();
  }, [currentX]);

  const onClickLeft = () => {
    if (currentX + 360 > 0) {
      return setCurrentX(0);
    }
    setCurrentX(currentX + 360);
  };

  const onClickRight = () => {
    if (currentX - 360 < endX) {
      return setCurrentX(endX);
    }
    setCurrentX(currentX - 360);
  };

  return (
    <Wrapper currentLoc={currentX}>
      {friends.map((friend) => (
        <FriendStory key={friend.id} name={friend.name} imgUrl={friend.imgUrl} />
      ))}
      {showLeftButton && (
        <Button onClick={onClickLeft} className="left">
          <img src="../../assets/story_left_button.png" alt="Story Left Button" />
        </Button>
      )}
      {showRightButton && (
        <Button onClick={onClickRight} className="right">
          <img src="../../assets/story_right_button.png" alt="Story Right Button" />
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ul<{ currentLoc: number }>`
  width: 576px;
  height: 162px;
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 0px 32px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  position: relative;

  li:nth-child(1) {
    transition: all 0.6s ease-in;
    margin-left: ${({ currentLoc }) => `${currentLoc}px`};
  }
`;

const Button = styled.div`
  position: absolute;
  cursor: pointer;

  &.left {
    left: 24px;
  }

  &.right {
    right: 24px;
  }
`;
