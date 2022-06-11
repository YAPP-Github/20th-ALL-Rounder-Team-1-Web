import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FriendStory } from './FriendStory';
import { calculateEndX } from '@/utils';

const friends = [
  { id: 0, name: '빌리', imgUrl: '' },
  {
    id: 1,
    name: '손흥민',
    imgUrl:
      'https://w.namu.la/s/18cdc3e45fee5e76f3f3a29056396db782c12502afe39de7539f82893cd2339c70522a6bdbb849a2cf990ce554dca7db8307eac97b5591f4a623fc595694af5157adfb48ccdda9c8bbba83c73ff58ca7b74e3351d818772ba0f8d4aaad3d2f6f0273faf1fc9b0e5ada654b3f5b7ed6f6',
  },
  {
    id: 2,
    name: 'Morant',
    imgUrl:
      'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5MzY3Mzc1ODIzMzgyNDk2/ja-morant-sneaks-among-the-mvp-candidates.jpg',
  },
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
  const [clickedFriend, setClickedFriend] = useState(friends[0].id);
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
