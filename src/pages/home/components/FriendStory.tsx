import { Dispatch, SetStateAction } from 'react';
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
      <Image imgUrl={imgUrl}>
        <Border isSelected={isSelected} />
      </Image>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 60px;
  height: 90px;
`;

const Image = styled.div<{ imgUrl?: string }>`
  width: 60px;
  height: 60px;
  border-radius: 20.33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.Gray300};
  background-image: ${({ imgUrl }) => imgUrl && `url(${imgUrl})`};
  background-size: cover;
`;

const Border = styled.div<{ isSelected: boolean }>`
  width: 54px;
  height: 54px;
  border-radius: 20.33px;
  border: ${({ isSelected, theme: { colors } }) => isSelected && `3px solid ${colors.WeekandBlue}`};
`;

const Name = styled.h1`
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme: { colors } }) => colors.Gray600};
`;
