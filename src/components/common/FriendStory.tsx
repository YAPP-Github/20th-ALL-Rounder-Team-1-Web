import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface FriendStoryProps {
  id: number;
  imgUrl?: string;
  name: string;
  clickedFriend: number;
  setClickedFriend: Dispatch<SetStateAction<number>>;
}

export const FriendStory = ({
  id,
  imgUrl,
  name,
  clickedFriend,
  setClickedFriend,
}: FriendStoryProps) => {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setClickedFriend(id);
  };

  const handleSelected = () => {
    if (id === clickedFriend) {
      return setSelected(true);
    }
    setSelected(false);
  };

  useEffect(() => {
    handleSelected();
  }, [clickedFriend]);

  return (
    <Wrapper onClick={onClick}>
      <Image selected={selected}>{imgUrl && <img className="with_image" src={imgUrl} />}</Image>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 60px;
  height: 90px;
  gap: 8px;
`;

const Image = styled.div<{ selected: boolean }>`
  width: 54px;
  height: 54px;
  border-radius: 20.33px;
  border: ${({ selected, theme: { colors } }) =>
    selected ? `3px solid ${colors.WeekandBlue}` : `3px solid ${colors.Gray300}`};
  background-color: ${({ theme: { colors } }) => colors.Gray300};

  .with_image {
    width: 60px;
    height: 60px;
    border-radius: 20.33px;
  }
`;

const Name = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.Gray600};
`;
