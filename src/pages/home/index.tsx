import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { FriendStories } from './components';

import { useSearchUser } from '@/api/search';
import {
  Calender,
  Follow,
  Interests,
  Job,
  PageLayout,
  Profile,
  Purpose,
  Schedules,
} from '@/common';

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

  const { search_user } = useSearchUser();

  const [userInfo, setUserInfo] = useState<IUser>();
  const [userId, setUserId] = useState('');
  const [today, setToday] = useState('');
  const [clickedDay, setClickedDay] = useState(today);

  const showUser = async () => {
    if (userId.length) {
      const {
        data: { user },
      } = await search_user({
        variables: {
          id: userId,
        },
      });
      setUserInfo(user);
      return;
    }
    const {
      data: { user },
    } = await search_user();
    setUserInfo(user);
  };

  useEffect(() => {
    showUser();
  }, [userId]);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <div>
          <FriendStories />
          {userInfo && <Schedules userId={userInfo.id} date={Number(clickedDay)} />}
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
              <Interests interests={userInfo.interests} />
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
