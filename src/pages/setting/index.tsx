import { useContext } from 'react';
import styled from 'styled-components';

import { SettingSidebar } from './components';

import { PageLayout } from '@/common';
import { SettingContext } from '@/contexts';

const Setting = () => {
  const { currentContent } = useContext(SettingContext);

  return (
    <PageLayout title="세팅 페이지" isFooter={false}>
      <Wrapper>
        <SettingSidebar />
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
  border: 1px solid black;
`;

export default Setting;
