import { useState } from 'react';
import styled from 'styled-components';
import { FriendStory } from './FriendStory';

export const FriendStories = () => {
  const friends = [
    { name: '손흥민', imgUrl: '' },
    { name: 'Morant', imgUrl: '' },
    { name: 'Cody', imgUrl: '' },
    { name: 'Woody', imgUrl: '' },
    { name: 'Corey', imgUrl: '' },
    { name: 'Trae', imgUrl: '' },
    { name: 'James', imgUrl: '' },
    { name: '1', imgUrl: '' },
    { name: '2', imgUrl: '' },
    { name: '3', imgUrl: '' },
    { name: '4', imgUrl: '' },
    { name: '5', imgUrl: '' },
    { name: '6', imgUrl: '' },
    { name: '7', imgUrl: '' },
    { name: '8', imgUrl: '' },
    { name: '9', imgUrl: '' },
    { name: '10', imgUrl: '' },
  ];

  const [start, setStart] = useState(0);
  const endX = -(64 + 60 * friends.length + 26 * (friends.length - 1)) + 640;

  const showLeftButton = () => {
    if (start === 0) {
      return false;
    }
    return true;
  };

  const showRightButton = () => {
    if (start === endX) {
      return false;
    }
    return true;
  };

  const onClickLeft = () => {
    if (start + 360 > 0) {
      setStart(0);
    } else {
      setStart(start + 360);
    }
  };

  const onClickRight = () => {
    if (start - 360 < endX) {
      setStart(endX);
    } else {
      setStart(start - 360);
    }
  };

  return (
    <Wrapper currentLoc={start}>
      {friends.map((friend, index) => (
        <FriendStory key={index} name={friend.name} imgUrl={friend.imgUrl} />
      ))}
      {showLeftButton() && (
        <Button onClick={onClickLeft} className="left">
          Left
        </Button>
      )}
      {showRightButton() && (
        <Button onClick={onClickRight} className="right">
          Right
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
  background-color: greenyellow;
  overflow: hidden;
  position: relative;

  li:nth-child(1) {
    transition: all 0.6s ease-in;
    margin-left: ${({ currentLoc }) => `${currentLoc}px`};
  }
`;

const Button = styled.div`
  position: absolute;
  &.left {
    left: 24px;
  }
  &.right {
    right: 24px;
  }
`;
