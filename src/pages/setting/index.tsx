import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { EditProfile, SettingSidebar } from './components';

import { useUserInfo } from '@/api/setting';
import { PageLayout } from '@/common';

interface IUserInfo {
  id: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  goal: string;
  jobs: string[];
  interests: string[];
}

const Setting = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const { user_info } = useUserInfo();
  const [currentContent, setCurrentContent] = useState(<div />);

  const showUser = async () => {
    const {
      data: { user },
    } = await user_info({});
    setUserInfo(user);
  };

  useEffect(() => {
    showUser();
    if (userInfo) {
      setCurrentContent(<EditProfile userInfo={userInfo} />);
    }
  }, [userInfo]);

  return (
    <PageLayout isFooter={false}>
      <Wrapper>
        <SettingSidebar setCurrentContent={setCurrentContent} />
        <ContentWrapper>{currentContent}</ContentWrapper>
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 56px;
`;

const ContentWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  text-align: start;
`;

export default Setting;
