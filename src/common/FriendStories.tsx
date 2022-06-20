import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FriendStory } from '.';

import { calculateEndX, getFriends } from '@/utils';

export const FriendStories = () => {
  const friends = getFriends(); // 서버가 완성되면 실제 데이터로 수정하면 됩니다.
  const [currentX, setCurrentX] = useState(0);
  const endX = calculateEndX(friends.length);
  const [clickedFriend, setClickedFriend] = useState(friends[0].id);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const isSelected = (id: number) => {
    if (id === clickedFriend) {
      return true;
    }
    return false;
  };

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

  return (
    <Wrapper currentLoc={currentX}>
      {friends.map((friend) => (
        <FriendStory
          key={friend.id}
          id={friend.id}
          name={friend.name}
          imgUrl={friend.imgUrl}
          isSelected={isSelected(friend.id)}
          setClickedFriend={setClickedFriend}
        />
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
  cursor: pointer;

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
