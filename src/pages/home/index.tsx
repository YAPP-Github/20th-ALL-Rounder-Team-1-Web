import styled from 'styled-components';

import { FriendStories, Profile, Schedules } from './components';

import { Calender, PageLayout } from '@/common';

const Home = () => {
  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <div>
          <FriendStories />
          <Schedules />
        </div>
        <Right>
          <Profile />
          <Calender />
        </Right>
      </Wrapper>
    </PageLayout>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
`;

const Right = styled.div`
  margin-left: 60px;
`;
