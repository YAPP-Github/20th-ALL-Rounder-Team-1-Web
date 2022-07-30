import styled from 'styled-components';

import { SearchContent } from '.';

interface IUsers {
  id: string;
  goal: string;
  nickname: string;
  profileImageUrl: string;
}

interface SearchContentsProps {
  users: IUsers[];
}

export const SearchContents = ({ users }: SearchContentsProps) => {
  return (
    <Wrapper>
      {users.map(({ id, goal, nickname, profileImageUrl }) => (
        <SearchContent key={id} id={id} name={nickname} comment={goal} imgUrl={profileImageUrl} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
