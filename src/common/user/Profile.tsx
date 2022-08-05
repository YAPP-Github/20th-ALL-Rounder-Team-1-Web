import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useCreateFollow } from '@/api/search';

interface ProfileProps {
  nickname: string;
  email: string;
  profileImageUrl: string;
  isFollowed?: boolean;
  isSearchingUser?: boolean;
  id: string;
}

export const Profile = ({
  nickname,
  email,
  profileImageUrl,
  isFollowed = true,
  isSearchingUser = false,
  id,
}: ProfileProps) => {
  const [currentFollow, setCurrentFollow] = useState(true);
  const { create_follow } = useCreateFollow();

  const onClickFollow = async () => {
    await create_follow({
      variables: {
        input: {
          targetUserId: id,
        },
      },
    });
    setCurrentFollow(true);
  };

  useEffect(() => {
    setCurrentFollow(isFollowed);
  }, []);

  return (
    <Wrapper>
      <Informations>
        <Name>{nickname}</Name>
        {isSearchingUser ? (
          currentFollow ? (
            <Email>{email}</Email>
          ) : (
            <Follow onClick={onClickFollow}>팔로우</Follow>
          )
        ) : (
          <Email>{email}</Email>
        )}
      </Informations>
      <ImageWrapper>
        <img src={profileImageUrl} alt={nickname} width={80} height={80} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 31px 0;

  &:after {
    ${({ theme: { clearFloat } }) => clearFloat}
  }
`;

const Informations = styled.div`
  float: left;
`;

const Name = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1};
  margin-bottom: 16px;
  width: 310px;
`;

const Email = styled.span`
  ${({ theme: { fonts } }) => fonts.Body1('Gray500')};
`;

const ImageWrapper = styled.div`
  float: right;
  background-color: ${({ theme: { colors } }) => colors.Gray300};
  border-radius: 24px;

  img {
    border-radius: 24px;
  }
`;

const Follow = styled.button`
  width: 80px;
  height: 40px;
  padding: 7px 19px;
  border-radius: 10px;
  ${({ theme: { fonts } }) => fonts.Subhead2};
  color: #fff;
  background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
`;
