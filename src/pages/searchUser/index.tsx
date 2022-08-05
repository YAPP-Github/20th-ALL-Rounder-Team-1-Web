import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useSchedules, useSearchUser } from '@/api/search';
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

const SearchUser = () => {
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];

  const { search_user } = useSearchUser();

  const [userInfo, setUserInfo] = useState<IUser>();
  const { today, date, setDate } = useDate();

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
          <Schedules userId={userId} date={Number(date)} />
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

export default SearchUser;
