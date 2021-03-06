import { useState } from 'react';
import styled from 'styled-components';

import { EditProfile, SettingSidebar } from './components';

import { PageLayout } from '@/common';

const Setting = () => {
  const [currentContent, setCurrentContent] = useState(<EditProfile />);

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
