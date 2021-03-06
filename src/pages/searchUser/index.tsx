import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Follow, Interest, Job, Profile, Purpose, Schedules } from './components';

import { useSchedules, useSearchUser } from '@/api/search';
import { Calender, PageLayout } from '@/common';

interface IUser {
  email: string;
  followed: boolean;
  followeeCount: number;
  followerCount: number;
  goal: string;
  id: string;
  interests: string[];
  jobs: string[];
  nickname: string;
  profileImageUrl: string;
}

const Home = () => {
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];

  const { search_user } = useSearchUser();

  const [userInfo, setUserInfo] = useState<IUser>();
  const [today, setToday] = useState('');
  const [clickedDay, setClickedDay] = useState(today);

  const showUser = async () => {
    const {
      data: { user },
    } = await search_user({
      variables: {
        id: userId,
      },
    });
    setUserInfo(user);
  };

  useEffect(() => {
    showUser();
  }, []);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <div>
          <Schedules userId={userId} date={Number(clickedDay)} />
        </div>
        <Right>
          {userInfo && (
            <>
              <Profile
                nickname={userInfo.nickname}
                email={userInfo.email}
                profileImageUrl={userInfo.profileImageUrl}
              />
              <Calender setToday={setToday} setClickedDay={setClickedDay} />
              <Purpose goal={userInfo.goal} />
              <TopSeparator />
              <Job jobs={userInfo.jobs} />
              <Interest interests={userInfo.interests} />
              <BottomSeparator />
              <Follow
                followeeCount={userInfo.followeeCount}
                followerCount={userInfo.followerCount}
              />
            </>
          )}
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
