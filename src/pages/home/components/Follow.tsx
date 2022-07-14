import styled from 'styled-components';

import { Button } from '@/common';

export const Follow = () => {
  return (
    <Wrapper>
      <Follower>
        <div className="name">팔로워</div>
        <FollowButton
          className="value"
          onClick={() => {
            console.log(1);
          }}
        >
          113
        </FollowButton>
      </Follower>
      <Following>
        <div className="name">팔로잉</div>
        <FollowButton
          className="value"
          onClick={() => {
            console.log(1);
          }}
        >
          1242222
        </FollowButton>
      </Following>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Follower = styled.div`
  position: relative;
  width: 180px;

  .name {
    ${({ theme: { fonts } }) => fonts.Body1('Gray500')};
  }
`;

const Following = styled.div`
  position: relative;
  width: 180px;
  margin-left: 30px;

  .name {
    ${({ theme: { fonts } }) => fonts.Body1('Gray500')};
  }
`;

const FollowButton = styled(Button)`
  ${({ theme: { fonts } }) => fonts.Head2};
  text-align: left;
  margin-top: 8px;
  padding: 2px 0 3px 0;
  width: 180px;
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    right: 9px;
    top: 38px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-size: 455px 385px;
    background-position: -318px -351px;
  }
`;
