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
    { name: '손흥민', imgUrl: '' },
    { name: '손흥민', imgUrl: '' },
    { name: '손흥민', imgUrl: '' },
    { name: '손흥민', imgUrl: '' },
    { name: '손흥민', imgUrl: '' },
  ];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  return (
    <Wrapper>
      {friends.map((friend) => (
        <FriendStory name={friend.name} imgUrl={friend.imgUrl} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 576px;
  height: 162px;
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 0px 32px;
  border-radius: 10px;
  background-color: greenyellow;
`;
