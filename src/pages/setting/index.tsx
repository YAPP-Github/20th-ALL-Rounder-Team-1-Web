import { useState } from 'react';
import styled from 'styled-components';

import { EditProfile, SettingSidebar } from './components';

import { PageLayout } from '@/common';

const Setting = () => {
  const [currentContent, setCurrentContent] = useState(<EditProfile />);

  return (
    <PageLayout title="세팅 페이지" isFooter={false}>
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
`;

const ContentWrapper = styled.div`
  width: 739px;
  height: 798px;
  border-radius: 10px;
  background-color: #fff;
  padding: 40px 40px;
  text-align: start;
`;

export default Setting;
