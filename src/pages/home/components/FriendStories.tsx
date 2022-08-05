import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import { FriendStory } from '.';

import { calculateEndX, FRIENDS } from '@/utils';

interface IFollowees {
  id: string;
  nickname: string;
  profileImageUrl: string;
}

interface FriendStoriesProps {
  followees: IFollowees[];
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  hasNextFriend: boolean;
}

export const FriendStories = ({
  followees,
  userId,
  setUserId,
  hasNextFriend,
}: FriendStoriesProps) => {
  const [clickedNext, setClickedNext] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const endX = calculateEndX(FRIENDS.length);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const isSelected = (id: string) => {
    if (id === userId) {
      return true;
    }
    return false;
  };

  const onClickLeft = () => {
    if (currentX + 360 > 0) {
      return setCurrentX(0);
    }
    setClickedNext(clickedNext - 1);
    setCurrentX(currentX + 360);
  };

  const onClickRight = () => {
    if (currentX - 360 < endX) {
      return setCurrentX(endX);
    }
    setClickedNext(clickedNext + 1);
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
      {followees &&
        followees.map(({ id, nickname, profileImageUrl }) => (
          <FriendStory
            key={id}
            id={id}
            name={nickname}
            imgUrl={profileImageUrl}
            isSelected={isSelected(id)}
            setClickedFriend={setUserId}
          />
        ))}
      {hasNextFriend && (
        <Button onClick={onClickLeft} className="left">
          <i className="left-icon" />
        </Button>
      )}
      {clickedNext > 0 && (
        <Button onClick={onClickRight} className="right">
          <i className="right-icon" />
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

    i.left-icon {
      ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 50, 50)}
      background-position: -10px -10px;
    }
  }

  &.right {
    right: 24px;

    i.right-icon {
      ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 50, 50)}
      background-position: -80px -10px;
    }
  }
`;
