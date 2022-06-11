import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

interface FriendStoryProps {
  id: number;
  imgUrl?: string;
  name: string;
  isSelected: boolean;
  setClickedFriend: Dispatch<SetStateAction<number>>;
}

export const FriendStory = ({
  id,
  imgUrl,
  name,
  isSelected,
  setClickedFriend,
}: FriendStoryProps) => {
  const onClick = () => {
    setClickedFriend(id);
  };

  return (
    <Wrapper onClick={onClick}>
      <Image isSelected={isSelected}>{imgUrl && <img className="with_image" src={imgUrl} />}</Image>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 60px;
  height: 90px;
  gap: 8px;
`;

const Image = styled.div<{ isSelected: boolean }>`
  width: ${({ isSelected }) => (isSelected ? '54px' : '60px')};
  height: ${({ isSelected }) => (isSelected ? '54px' : '60px')};
  border-radius: 20.33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ isSelected, theme: { colors } }) => isSelected && `3px solid ${colors.WeekandBlue}`};
  background-color: ${({ theme: { colors } }) => colors.Gray300};

  .with_image {
    width: ${({ isSelected }) => (isSelected ? '54px' : '60px')};
    height: ${({ isSelected }) => (isSelected ? '54px' : '60px')};
    border-radius: 16px;
  }
`;

const Name = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.Gray600};
`;
