import styled from 'styled-components';

import { Follow, FriendStories, Interest, Job, Profile, Purpose, Schedules } from './components';

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
          {/* <Calender /> */}
          <Purpose />
          <TopSeparator />
          <Job />
          <Interest />
          <BottomSeparator />
          <Follow />
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

const TopSeparator = styled.div`
  width: 390px;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.Gray300};
  margin: 20px 0 24px 0;
`;

const BottomSeparator = styled.div`
  width: 390px;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.Gray300};
  margin: 24px 0 20px 0;
`;
