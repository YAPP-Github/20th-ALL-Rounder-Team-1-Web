import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FriendStories } from './components';

import { useFollowees, useSearchUser } from '@/api/search';
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
import { useDate } from '@/hooks';

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

interface IFollowees {
  id: string;
  nickname: string;
  profileImageUrl: string;
}

const Home = () => {
  const { search_user } = useSearchUser();
  const { followees } = useFollowees();

  const [userInfo, setUserInfo] = useState<IUser>();
  const [userProfile, setUserProfile] = useState<IFollowees>();
  const [userFollowees, setUserFollowees] = useState<IFollowees[]>([]);
  const [userId, setUserId] = useState('');
  const [hasNextFriend, setHasNextFriend] = useState(false);
  const { today, date, setDate } = useDate();

  const showUser = async () => {
    if (userId.length) {
      try {
        const {
          data: { user },
        } = await search_user({
          variables: {
            id: userId,
          },
        });
        setUserInfo(user);
        return;
      } catch (e) {
        window.location.reload();
      }
    }
    try {
      const {
        data: { user },
      } = await search_user();
      const { id, nickname, profileImageUrl } = user;
      setUserInfo(user);
      setUserProfile({ id, nickname, profileImageUrl });
      setUserId(id);
    } catch (e) {
      window.location.reload;
    }
  };

  const showFollowees = async () => {
    try {
      const {
        data: {
          followees: {
            paginationInfo: { hasNext },
            followees: userFollowee,
          },
        },
      } = await followees({
        variables: {
          page: 0,
          size: 6,
        },
      });
      setHasNextFriend(hasNext);
      setUserFollowees([...userFollowees, ...userFollowee]);
    } catch (e) {
      window.location.reload();
    }
  };

  useEffect(() => {
    try {
      showUser();
      showFollowees();
    } catch (e) {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    showUser();
  }, [userId]);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <div>
          {userProfile && (
            <FriendStories
              followees={[userProfile, ...userFollowees]}
              userId={userId}
              setUserId={setUserId}
              hasNextFriend={hasNextFriend}
            />
          )}
          {userInfo && <Schedules userId={userId} date={Number(date)} />}
        </div>
        <Right>
          {userInfo && (
            <>
              <Profile
                nickname={userInfo.nickname}
                email={userInfo.email}
                profileImageUrl={userInfo.profileImageUrl}
              />
              <Calender today={today} date={date} setDate={setDate} />
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
